const { google } = require('googleapis');
const calendar = google.calendar('v3');
const calendarAuth = require('../config/google-api-auth');

function listAllEvents(req, res) {
  // authorize request
  let auth = calendarAuth();

  let startDate = new Date().toISOString();

  // list events
  calendar.events.list(
    {
      auth: auth,
      calendarId: process.env.CALENDAR_ID,
      timeMin: startDate
    },
    (err, response) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.json(response.data.items);
    }
  );
}

function getEvent(req, res) {
  // authorize request
  const auth = calendarAuth();

  // find event
  calendar.events.get(
    {
      auth: auth,
      calendarId: process.env.CALENDAR_ID,
      eventId: req.params.eventId
    },
    (err, response) => {
      if (err) return res.status(400).send(err);
      return res.json(response.data);
    }
  );
}

module.exports = { getEvent, listAllEvents };
