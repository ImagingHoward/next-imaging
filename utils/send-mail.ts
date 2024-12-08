import nodemailer from 'nodemailer';

/**
 * Sends an email to the specified recipient (typically a contact form submission).
 * @param from - The email address sending the message
 * @param to - The email address receiving the message
 * @param subject - The subject of the email
 * @param message - The body content of the email
 * @returns {boolean} - Returns true if the email was sent successfully, otherwise false
 */
export const sendMail = async (from: string, to: string, subject: string, message: string) => {
  try {
    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: message,
      html: message,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return true; // Indicate success
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};
