import { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, project } = req.query;

  console.log('Download results zip:', { username, project });

  if (!username || !project) {
    console.error("Missing parameters:", { username, project });
    return res.status(400).send("Missing parameters");
  }

  try {
    // Azure connection string and blob client
    const AZURE_CONNECTION_STRING = process.env.NEXT_PUBLIC_AZURE_CONNECTION_STRING;
    if (!AZURE_CONNECTION_STRING) {
      throw new Error('Azure connection string is not defined');
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient('uploaded');

    const zipFileName = `${username}/${project}/results.zip`;
    const blobClient = containerClient.getBlobClient(zipFileName);

    // Check if the blob exists
    const blobExists = await blobClient.exists();
    if (!blobExists) {
      console.log(`Blob does not exist: ${zipFileName}`);
      return res.status(404).send('File not found');
    }

    console.log(`Blob found: ${zipFileName}`);

    // Set headers to indicate file download
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="results.zip"`);

    // Download the blob and directly pipe the stream to the response
    const downloadBlockBlobResponse = await blobClient.download(0);

    // Check if the stream is defined
    if (!downloadBlockBlobResponse.readableStreamBody) {
      console.error('Readable stream body is undefined');
      return res.status(500).send('Failed to get file stream');
    }

    const fileStream = downloadBlockBlobResponse.readableStreamBody;

    // Pipe the file stream to the response
    fileStream.pipe(res);

    // Listen for errors in the stream
    fileStream.on('error', (err) => {
      console.error('Stream error:', err);
      res.status(500).send('Failed to download the file due to stream error');
    });

    // Check when the stream finishes
    fileStream.on('end', () => {
      console.log('File stream finished successfully');
    });

    // Listen for the finish event on the response to log completion
    res.on('finish', () => {
      console.log('File download finished successfully');
    });

  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack trace:', error.stack);
    } else {
      console.error('Unknown error:', error);
    }
    res.status(500).send('An error occurred while downloading the file: ' + (error as Error).message);
  }
}
