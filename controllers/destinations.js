const Flight = require('../models/flight');

async function create(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    flight.save();
    res.redirect(`/flights/${flight._id}`);
  } catch (e) {
    res.send(e.message);
  }
}

module.exports = { create };
