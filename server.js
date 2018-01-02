//server.js
'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');

dotenv.config();

var Contact = require('./models/contact');
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;

//db config
var mongoDB = 'mongodb://' + username + ':' + password + '@ds237707.mlab.com:37707/octagon-test';
mongoose.connect(mongoDB)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});


router.route('/contact')
  .get(function(req, res) {
    Contact.find(function(err, messages) {
      if (err)
        res.send(err);
      res.json(messages)
    });
  })
  .post(function(req, res) {
    var contact = new Contact();
    contact.firstName = req.body.firstName;
    contact.lastName = req.body.lastName;
    contact.email = req.body.email;
    contact.usaState = req.body.usaState;
    contact.zip = req.body.zip;
    contact.topic = req.body.topic;
    contact.message = req.body.message;

    contact.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'We got your message!' });
    });
  });


app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
