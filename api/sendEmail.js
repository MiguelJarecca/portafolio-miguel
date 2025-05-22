// api/sendEmail.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Miguel <onboarding@resend.dev>',
      to: ['miguel.jarecca@gmail.com'],
      subject: 'Nuevo mensaje desde tu portafolio',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ success: true, id: response.id });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
