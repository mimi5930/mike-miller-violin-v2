require('dotenv').config();
const nodemailer = require('nodemailer');

// connect to froggy
const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PW
  }
});

module.exports = transporter;
