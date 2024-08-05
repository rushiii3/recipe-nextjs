const nodemailer = require("nodemailer");
const sendMail = async (email, fullname, token) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    Subject: "Activate Your Rent Me Account to Start Renting Your Dream Home!",
    html: `<b>Hello world? ${fullname} <a href='${token}'>Click to verify</a> </b>`, // html body
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
