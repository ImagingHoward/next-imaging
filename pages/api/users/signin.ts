import { NextApiRequest, NextApiResponse } from 'next';
import { createDbConnection } from '../../../utils/db-connection';
import bcrypt from 'bcryptjs';

interface SignUpRequestBody {
  email: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {

    const { email, password }: SignUpRequestBody = req.body;

    const db = createDbConnection();

    try {
      const [result]: any = await db.query('SELECT * FROM stainai_user_info WHERE email = ?', [email]);

      if (result.length === 0) {
        return res.status(400).json({ message: 'Account not found.' });
      }

      const hashedPassword = result[0].password;
      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (isMatch) {
        return res.status(200).json({
          user: {
            userid: result[0].userid,
            email: result[0].email,
            firstname: result[0].firstname,
            lastname: result[0].lastname,
            organization: result[0].organization,
          },
          allow: true
        });
      } else {
        return res.status(400).json({ success: false, message: 'Incorrect password' });
      }
    } catch (error) {
      console.error('Error during signin:', error);
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }

  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}