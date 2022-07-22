const router = require('express').Router();
const { listAllEvents, getEvent } = require('../../controller/events');

router.get('/events', listAllEvents);
router.get('/event/:eventId', getEvent);

module.exports = router;
