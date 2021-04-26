const Ticket = require('../models/ticket');

function getNew(req, res) {
  res.render('tickets/new', { title: 'Add a Ticket', flightId: req.params.id });
}

function create(req, res) {
  req.body.flight = req.params.id;
  const ticket = new Ticket(req.body);
  ticket.save().then((ticket) => {
    res.redirect(`/flights/${ticket.flight}`);
  });
}

module.exports = { create, new: getNew };
