const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

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
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('flights/showFlight', {
      title: 'Flight Details',
      flight,
      tickets,
    });
  } catch (e) {
    res.send(e.message);
  }
}

module.exports = { getAll, newFlight, create, showFlight };
