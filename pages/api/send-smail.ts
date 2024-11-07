import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    console.log(process.env.GMAIL_USER, process.env.GMAIL_PASSWORD)

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email
        pass: process.env.GMAIL_PASSWORD, // Your Gmail app password (not the regular Gmail password)
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Send to your Gmail address
      subject: `${subject} from ${name}`,
      text: message,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
