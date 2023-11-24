const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'bettie.zieme86@ethereal.email',
      pass: 'A6mCAC3w6QBb1uMye7',
    },
  });

  const info = await transporter.sendMail({
    from: '"Raghav Khandelwal 👻" <raghavk1579@gmail.com>',
    to: 'bar@example.com',
    subject: 'Hello ✔',
    html: '<h2>Sending emails with node.js ',
  });

  // res.send('send email func');
  res.json(info);
};

module.exports = sendEmail;
