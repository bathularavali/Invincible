const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug')('invincible:server');
const app = express();

// The angular deployment
const distDir = __dirname + '/dist';
app.use(express.static(distDir));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// for unmatched paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
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
  // res.render('error');
  res.json({
    error: err
  });
});

var port = process.env.PORT || 8080;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  var port = server.address().port;
  debug('Listening on port', port);
});
