const { google } = require('googleapis');
const scopes = 'https://www.googleapis.com/auth/calendar';
require('dotenv').config();

function calendarAuth() {
  // create JWT auth with service account
  const jwtClient = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY,
    scopes,
    null
  );

  // authorize the jwt
  jwtClient.authorize(err => {
    if (err) {
      console.log(err);
      return false;
    }
  });

  // return the authorized client
  return jwtClient;
}

module.exports = calendarAuth;
