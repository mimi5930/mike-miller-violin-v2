const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const calendarAuth = require('../../server/config/google-api-auth');

const calendar = google.calendar('v3');

async function main() {
  // authorize request
  let auth = calendarAuth();

  let startDate = new Date();
  // set start date to three months ago
  startDate.setMonth(startDate.getMonth() - 3);

  try {
    const result = await calendar.events.list({
      auth: auth,
      calendarId: process.env.CALENDAR_ID,
      timeMin: startDate
    });
    const eventList = result.data.items;
    fs.writeFile(
      path.join(__dirname, '../assets/eventData/data.json'),
      JSON.stringify(eventList),
      error => {
        if (error) {
          console.log(error);
        } else {
          console.log('Event Data Successfully written');
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
}

main();
