import { NextApiRequest, NextApiResponse } from 'next';
import { BlobServiceClient } from '@azure/storage-blob';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
import { createDbConnection } from '../../utils/db-connection';
import { sendMail } from '../../utils/send-mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, project, folderPath } = req.query;

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

    if (typeof folderPath !== 'string' || !fs.existsSync(folderPath)) {
      return res.status(404).send(`Folder not found at ${folderPath}`);
    }

    // Prepare the zip file name
    const zipFileName = `results.zip`;
    const zipFilePath = path.join(folderPath, zipFileName);

    console.log(`Zipping folder: ${folderPath} to ${zipFilePath}`);

    // Create a write stream for the ZIP file
    const output = fs.createWriteStream(zipFilePath);

    // Create an Archiver instance to zip the folder
    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(output);

    // Add the folder to the zip archive
    archive.directory(folderPath, false);  // false means do not include the folder name in the zip file

    // Finalize the zip creation
    await archive.finalize();

    // Wait for the zip file to be fully created
    output.on('close', async () => {
      console.log(`ZIP file created: ${zipFilePath}, total bytes: ${archive.pointer()}`);

      // Read the zip file to upload it to Azure Blob Storage
      const zipStream = fs.createReadStream(zipFilePath);
      const blobClient = containerClient.getBlockBlobClient(`${username}/${project}/${zipFileName}`);

      // Upload the zip file to Azure Blob Storage
      await blobClient.uploadStream(zipStream, undefined, undefined, {
        blobHTTPHeaders: { blobContentType: 'application/zip' },
      });

      console.log(`Successfully uploaded ZIP file to Azure Blob Storage: ${zipFileName}`);

      // Optionally, delete the local zip file after upload
      fs.unlinkSync(zipFilePath);

      // Update the status of the project in the database
      const db = createDbConnection();
      await db.query('UPDATE stainai_upload_info SET status = "done" WHERE project = ?', [project]);

      const userinfo = await db.query('SELECT DISTINCT email FROM stainai_user_info, stainai_upload_info WHERE stainai_user_info.userid = stainai_upload_info.userid and project = ?', [project]);

      const email = userinfo.map((info: any) => info[0].email).filter(Boolean).join(', ');

      // Close the database connection
      db.end();

      // SendMail to the user
      const from = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      const to = email;
      const subject = 'STAIN.AI: Your results are ready for download';

      const message = `
        <p>Hi ${username},</p>
        <p>Your results for project ${project} are ready. Click the link below to download the results:</p>
          <a href="https://imaging.howard.edu/stainai/user/dashboard">link</a>
        </p>
        <p>Best regards,<br />The STAIN.AI Team</p>
      `;

      await sendMail(from, to, subject, message);

      return res.status(200).send(`Folder ${project} for ${username} has been zipped and uploaded successfully.`);
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