import { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '../../utils/send-mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
      const from = email;
      const to = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      await sendMail(from, to , `${subject} from ${name}`, message);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
