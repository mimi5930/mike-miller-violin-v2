const router = require('express').Router();
const { listAllEvents, getEvent } = require('../../controller/events');
const formSubmit = require('../../controller/formSubmit');

router.get('/events', listAllEvents);
router.get('/event/:eventId', getEvent);
router.post('/submit-form', formSubmit);

module.exports = router;
