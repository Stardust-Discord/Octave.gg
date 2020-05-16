const config = require('./config.json');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const app = express();

app.set('trust proxy', 1);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static(path.join(__dirname, 'public/index.html')));

// Handle 404
app.use(function(req, res) {
  res.status(404)
  res.redirect('/404.html')
});

// Handle 500
app.use(function(error, req, res, next) {
  res.send('500: Internal Server Error' + error, 500);
  console.log
});

module.exports = app;
