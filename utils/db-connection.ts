import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';

export const createDbConnection = () => {
  const certificatePath = path.resolve('certs', 'DigiCertGlobalRootCA.crt.pem');

  try {
    return mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : 3306,
      ssl: {
        ca: fs.readFileSync(certificatePath),
        rejectUnauthorized: false,
      },
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  } catch (error) {
    console.error('Error establishing database connection:', error);
    throw new Error('Database connection failed');
  }
};
