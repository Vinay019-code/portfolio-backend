// import nodemailer from "nodemailer";

// const sendEmail = async ({ name, email, message }) => {
  
//   // 1. Create transporter (email service setup)
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   // 2. Define email content
//   await transporter.sendMail({
//     from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_USER, // you receive email
//     subject: `New Message from ${name}`,
//     html: `
//       <h3>New Contact Message</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   });
// };

// export default sendEmail;

import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Portfolio Message from ${name}`,
      html: `
     <p>This message was sent from your portfolio website.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent:", info.response);

  } catch (error) {
    console.error("Email error:", error);
  }
};

export default sendEmail;