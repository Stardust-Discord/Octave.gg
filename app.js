'use strict';

const credentials = require('./credentials.json');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const helmet = require('helmet');

const index = require('./routes/index');
const dashboard = require('./routes/dashboard');

const app = express();

const r = require('rethinkdbdash')({
  db: 'web'
});
const session = require('express-session');
const RDBStore = require('session-rethinkdb')(session);

const store = new RDBStore(r, {
  table: 'sessions'
});

app.set('trust proxy', 1);

app.use(session({
  secret: credentials.sessionSecret.toString(),
  cookie: { secure: true },
  store: store,
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(sass({
  src: path.join(__dirname, 'public', 'scss'),
  dest: path.join(__dirname, 'public', 'scss'),
  // debug: true,
  outputStyle: 'compressed',
  prefix: '/scss'
}));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet({
  frameguard: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/dashboard', dashboard);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.end('Not found!');
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
