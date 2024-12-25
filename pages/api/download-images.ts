import { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';
import archiver from 'archiver';
import { Readable } from 'stream';  // Import Node.js Readable stream

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, project } = req.query;

  if (!username || !project) {
    console.error("Missing parameters:", { username, project });
    return res.status(400).send("Missing parameters");
  }

  try {
    const AZURE_CONNECTION_STRING = process.env.NEXT_PUBLIC_AZURE_CONNECTION_STRING;
    if (!AZURE_CONNECTION_STRING) {
      throw new Error('Azure connection string is not defined');
    }
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient('uploaded');

    // Check if the container exists
    const containerExists = await containerClient.exists();
    if (!containerExists) {
      console.log(`Container does not exist: uploaded`);
      return res.status(404).send('Container not found');
    }

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${project}.zip"`);

    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(res);

    const listOptions = {
      prefix: `${username}/${project}/`,
    };

    const blobs = containerClient.listBlobsFlat(listOptions);

    for await (const blob of blobs) {
      if (/\.[a-z0-9]+$/i.test(blob.name)) {
        const blobClient = containerClient.getBlobClient(blob.name);
        const downloadResponse = await blobClient.download(0);

        if (downloadResponse.readableStreamBody) {
          // Convert the Web ReadableStream to a Node.js Readable stream
          const nodeReadableStream = Readable.from(downloadResponse.readableStreamBody);
          
          // Append the converted Node.js stream to the archive
          archive.append(nodeReadableStream, { name: blob.name });
        } else {
          console.error(`No readable stream for blob: ${blob.name}`);
        }
      }
    }

    await archive.finalize();

    archive.on('finish', () => {
      res.status(200).json({ message: `Successfully downloaded ZIP file for project: ${project} by user: ${username}` });
    });

  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack trace:', error.stack);
    } else {
      console.error('Unknown error:', error);
    }
    res.status(500).send('An error occurred while downloading the folder: ' + (error as Error).message);
  }
}
