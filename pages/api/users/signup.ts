import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';  // For generating a unique token
import { createDbConnection } from '../../../utils/db-connection';
import { sendMail } from '../../../utils/send-mail';

interface SignUpRequestBody {
  firstname: string;
  lastname: string;
  organization: string;
  email: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    
    const { firstname, lastname, organization, email }: SignUpRequestBody = req.body;

    const db = createDbConnection(); 

    try {
      // Check if the email already exists in the database
      const [rows]: any = await db.query('SELECT * FROM stainai_user_info WHERE email = ?', [email]);

      if (rows.length > 0) {
        return res.status(400).json({ message: 'Email already exists' });
      }

      const token = uuidv4();
      // Insert the new user into the database
      const [result] = await db.query(
        'INSERT INTO stainai_user_info (firstname, lastname, organization, email, password, token, token_expiry, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
          firstname, 
          lastname, 
          organization, 
          email, 
          null,   // You can set the password to null if it's being set later
          token, 
          new Date(Date.now() + 60 * 60 * 1000), // Token expires in 1 hour
          new Date(),  // current timestamp (this will be inserted directly)
        ]
      );   

      const from = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      const to = email;
      
      const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/stainai/user/password-reset?token=${token}`;
      const subject = 'Email Verification for Your STAIN.AI Account';

      const message = `
        <p>Hi ${firstname},</p>
        <p>Thank you for registering with STAIN.AI! To complete your registration, please verify your email address by clicking the link below:</p>
        <p><a href="${verificationUrl}" style="color: #007bff; text-decoration: none;">Verify Your Email</a></p>
        <p>If you didn't sign up for an account, you can safely ignore this email.</p>
        <p>Best regards,<br />The STAIN.AI Team</p>
      `;

      await sendMail(from, to,subject, message);

      return res.status(200).json({ message: 'Registration successful. Please check your email for verification.' });

    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }

  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
