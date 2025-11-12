import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  try {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      to,
      subject,
      text,
    });
  } catch (error) {
    throw new Error(`Email sending failed: ${error.message}`);
  }
};
