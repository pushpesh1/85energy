// Nodemailer utility
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendAssessmentEmail(to: string, name: string, content: string) {
  await transporter.sendMail({
    from: `"85 Energy" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Your Custom Solar Plan, ${name}`,
    html: `<h3>Hello ${name},</h3><p>${content}</p>`,
  });
}
