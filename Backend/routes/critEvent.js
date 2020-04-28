var express = require('express')
var router = express.Router();
var critEvent = require('../controller/critEventController');


router.post('/createCritEvent',critEvent.createCritEvent);
router.get('/getCritEventsList',critEvent.getCritEventsList);

module.exports = router;