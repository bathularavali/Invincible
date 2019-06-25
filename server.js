var createError = require('http-errors');
var express = require('express');
var path = require('path');
var http = require('http')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('invincible:server');
var mongoose = require('mongoose');

var app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/invincible',
  {
    useNewUrlParser: true
  }
);

var distDir = __dirname + '/dist';
app.use(express.static(distDir));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/test', (req, res) => {
  res.send('Hello World!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  var port = server.address().port;
  debug('Listening on port', port);
});
