const Flight = require('../models/flight');

async function getAll(req, res, next) {
  res.render('flights/index', {
    title: 'All Flights',
    flights: await Flight.find({}).sort('departs'),
  });
}

function newFlight(req, res) {
  res.render('flights/newFlight', { title: 'Add a Flight' });
}

async function create(req, res) {
  try {
    if (!req.body.departs) delete req.body.departs;
    let flight = new Flight(req.body);
    flight = await flight.save();
    res.redirect('/flights');
  } catch (err) {
    res.send(err.message);
  }
}

async function showFlight(req, res) {
  try {
    res.render('flights/showFlight', {
      title: 'Flight Details',
      flight: await Flight.findById(req.params.id),
    });
  } catch (e) {
    res.send(e.message);
  }
}

module.exports = { getAll, newFlight, create, showFlight };
