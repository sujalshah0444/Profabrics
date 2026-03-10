import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.CONTACT_TO || 'shahsubek@gmail.com';

    const mailOptions = {
      from: process.env.SMTP_FROM || `"Profabrics Website" <${process.env.SMTP_USER}>`,
      to: toAddress,
      subject: subject
        ? `[Profabrics Contact] ${subject}`
        : '[Profabrics Contact] New enquiry',
      text: `
New contact form submission from Profabrics website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}

Message:
${message}
      `.trim(),
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

