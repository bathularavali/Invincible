const createError = require('http-errors');
const express = require('express');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug')('invincible:server');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const postRoutes = require('./api/routes/posts');

const app = express();
// Mongo URI
const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/invincible';

// Create mongo connection
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Init gfs
let gfs;

conn = mongoose.connection;
conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('posts');
});

// The angular deployment
const distDir = __dirname + '/dist';
app.use(express.static(distDir));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use('/api/posts', postRoutes);

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

// for unmatched paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

server.on('listening', () => {
  var port = server.address().port;
  debug('Listening on port', port);
});
