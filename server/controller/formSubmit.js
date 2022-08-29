require('dotenv').config();
const transporter = require('../config/mail-auth');
const htmlTemplate = require('../utils/htmlTemplate');

async function submitMail({ email, message, name, phone, service }) {
  try {
    const response = await transporter.sendMail({
      from: `"🐸Form Froggy🐸" <${process.env.USER}>`,
      to: process.env.ADMIN,
      subject: `Form Submission From ${name}`,
      html: htmlTemplate({
        name: name,
        phone: phone,
        service: service,
        message: message,
        email: email
      })
    });

    if (response.response.includes('OK')) {
      return { status: 'OK', response: response };
    } else return { status: 'ERR', response: response };
  } catch (e) {
    console.log(e);
  }
}

async function formSubmit(req, res) {
  const { email, message, name, phone, service } = req.body;
  let testFalsy = [email, message, name, service];
  if (
    testFalsy.filter(field => {
      return field === '';
    }).length >= 1
  ) {
    console.log(testFalsy);
    res
      .status(400)
      .json({ error: 'bad request', message: 'Must fill required fields' });
  } else {
    try {
      const response = await submitMail({
        email: email,
        message: message,
        name: name,
        phone: phone,
        service: service
      });
      res.json(response);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = formSubmit;
