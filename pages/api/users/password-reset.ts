import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { createDbConnection } from '../../../utils/db-connection';
import { sendMail } from '../../../utils/send-mail';

interface SignUpRequestBody {
  token: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    
    const { token, password}: SignUpRequestBody = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: 'Token and password are required' });
    }

    try {
      const db = createDbConnection(); 
      // Check if the email already exists in the database
      const [rows]: any = await db.query('SELECT * FROM stainai_user_info WHERE token = ?', [token]);

      if (rows.length === 0) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }

      const user = rows[0];

      // Here you could add token expiry handling if needed
      // For example, you could check a token expiration column like this:
      const tokenExpiry = user.token_expiry;
      const now = new Date();
      if (now > new Date(tokenExpiry)) {
        return res.status(400).json({ message: 'Token has expired' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const [result] = await db.query(
        'UPDATE stainai_user_info SET password = ?, token = NULL WHERE userid = ?',
        [hashedPassword, user.userid]
      );      

      return res.status(200).json({ message: 'Password reset successfully' });

    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }

  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
