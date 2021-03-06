var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var appointmentService = require('../services/appointmentService');

router.get('/', function(req, res, next) {
  appointmentService.getAppointment(function(data) {
    res.send(data);
  });

});

router.post('/', function(req, res, next) {
  if(Array.isArray(req.body)) {
    appointmentService.newMultiAppointment(req.body);
  } else {
    appointmentService.newAppointment(req.body);
  }

  res.sendStatus(200);
});

router.put('/', function(req, res, next) {
  res.send('');
});

router.delete('/', function(req, res, next) {
  console.log(req);
  appointmentService.deleteAppointment(req.body);

  res.send('');
});

module.exports = router;
