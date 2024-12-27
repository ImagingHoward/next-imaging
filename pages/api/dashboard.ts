import { NextApiRequest, NextApiResponse } from 'next';
import { createDbConnection } from '../../utils/db-connection';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userid } = req.query as { userid: string };

    const db = createDbConnection();

    try {
      // Check if the email already exists in the database
      const [rows]: any = await db.query('SELECT * FROM stainai_upload_info WHERE userid = ? ORDER BY status', [userid]);

      return res.status(200).json({ data: rows });

    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}