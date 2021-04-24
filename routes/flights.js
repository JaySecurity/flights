var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.getAll);

router.get('/new', flightsCtrl.newFlight);

router.post('/', flightsCtrl.create);

module.exports = router;
