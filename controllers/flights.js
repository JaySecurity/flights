const Flight = require('../models/flight');

async function getAll(req, res, next) {
  res.render('flights/index', {
    title: 'All Flights',
    flights: await Flight.find({}),
  });
}

function newFlight(req, res) {
  res.render('flights/newFlight', { title: 'Add a Flight' });
}

async function create(req, res) {
  try {
    if (!req.body.departs) delete req.body.departs;
    let flight = new Flight(req.body);
    console.log(req.body.departs);
    flight = await flight.save();
    console.log(flight.departs);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
}

module.exports = { getAll, newFlight, create };
