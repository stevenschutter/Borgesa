import { Resend } from 'resend';
import nodemailer from 'nodemailer';

type MailInput = { subject: string; text: string };

export async function sendMail({ subject, text }: MailInput) {
  const to = process.env.MAIL_TO || 'hello@borgesa.be';
  const from = process.env.MAIL_FROM || 'website@borgesa.be';
  const provider = process.env.EMAIL_PROVIDER || 'resend';
  if (provider === 'smtp') {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({ to, from, subject, text });
    return;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({ to, from, subject, text });
}
