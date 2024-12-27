import { NextApiRequest, NextApiResponse } from 'next';
import { createDbConnection } from '../../utils/db-connection';
import { sendMail } from '../../utils/send-mail';

interface UploadInfoRequestBody {
  userid: string;
  username: string;
  email: string;
  project: string;
  uploadInfo: any[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      userid,
      username,
      email,
      project,
      uploadInfo
    }: UploadInfoRequestBody = req.body;

    // Validate request body
    if (!project || !email || !userid || !uploadInfo) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const db = createDbConnection();

    try {
      for (const info of uploadInfo) {
        // Insert into the stainai_upload_info table
        const query = `
          INSERT INTO stainai_upload_info 
          (project, species, strain, treatment, organ, slice, pixel, region, structure, images, status, timestamp, userid)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Execute the query with the provided values
        const [result] = await db.query(query, [
          project,
          info.species,
          info.strain,
          info.treatment,
          info.organ,
          info.slice,
          info.pixel,
          info.region,
          info.structure,
          info.images.join(','),
          'pending',
          new Date(),
          userid,
        ]);
      }

      // Close the database connection
      await db.end();

      // Send a confirmation email to the user
      let from = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      let to = email;

      let subject = `[Stain.AI] Your process id is ${project}`;

      let message = `
        <p>Hi ${username},</p>
        <p>Thank you for submitting your images to STAIN.AI! Your process id is ${project}. We will notify you once the process is completed.</p>
        <p>Best regards,<br />The STAIN.AI Team</p>
      `;

      await sendMail(from, to, subject, message);

      // Send a confirmation email to the STAIN.AI Team
      from = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      to = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      subject = `[Stain.AI] New Upload Images from ${username}`;

      message = `
        <p>Hi STAIN.AI Team,</p>
        <p>${username} has submitted new images to STAIN.AI. Please check the admin panel for more details.</p>
        <p>Download Link:  <a href='https://prbase.azurewebsites.net/api/download-images?username=${username}&project=${project}'/> here - https://prbase.azurewebsites.net/api/download-images?username=${username}&project=${project} </a></p>
      `;

      await sendMail(from, to, subject, message);

      // Return a success response with the result
      res.status(200).json({ message: 'Upload info inserted successfully' });
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ message: 'Error inserting upload info', error: errorMessage });
    }
  } else {
    // Handle invalid HTTP method (only POST is allowed)
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}