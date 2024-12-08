import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';  // For generating a unique token
import { createDbConnection } from '../../../utils/db-connection';
import { sendMail } from '../../../utils/send-mail';

interface RequestPasswordResetBody {
  email: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email }: RequestPasswordResetBody = req.body;

    // Check if the email is provided and valid
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ message: 'Invalid email address provided.' });
    }

    const db = createDbConnection();

    try {
      // Check if the email exists in the database
      const [rows]: any = await db.query('SELECT * FROM stainai_user_info WHERE email = ?', [email]);

      if (rows.length === 0) {
        return res.status(404).json({ message: 'No account found with this email address.' });
      }

      // Generate a unique reset token
      const token = uuidv4();
      // Set the token expiration time (1 hour from now)
      const token_expiry = new Date(Date.now() + 60 * 60 * 1000);

      // Store the reset token and its expiration in the database
      await db.query(
        'UPDATE stainai_user_info SET token = ?, token_expiry = ? WHERE email = ?',
        [token, token_expiry, email]
      );

      // Generate the password reset URL
      const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/stainai/user/password-reset?token=${token}`;

      // Email content
      const from = process.env.GMAIL_USER || 'imaging.howard@gmail.com';
      const subject = 'Password Reset Request for Your STAIN.AI Account';
      const message = `
        <p>Hello,</p>
        <p>We received a request to reset your STAIN.AI account password. To reset your password, please click the link below:</p>
        <p><a href="${resetUrl}" style="color: #007bff; text-decoration: none;">Reset Your Password</a></p>
        <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
        <p>Best regards,<br />The STAIN.AI Team</p>
      `;

      // Send the email
      await sendMail(from, email, subject, message);

      // Respond to the client
      return res.status(200).json({ message: 'A password reset link has been sent to your email address. Please check your inbox.' });

    } catch (error) {
      console.error('Error during password reset request:', error);
      return res.status(500).json({ message: 'An error occurred while processing your request. Please try again later.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}