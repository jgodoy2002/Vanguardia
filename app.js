var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import estudiantes from './routes/estudiantes.js';
import hechizero from './routes/hechizeros.js';
import gremio from './routes/gremio.js';

require('dotenv').config()
console.log(ejemplo.env)

const connectDataB = async()=>{
  try{
    await mongoose.connect( "mongodb+srv://cluster0.1krhq.mongodb.net/").then(console.log('Conectado a la base de datos'));
  }catch(error){
    console.error('Error al conectar a la base de datos', error)
  }
}
connectDataB();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/estudiantes', estudiantes);
app.use('/hechizero', hechizero);
app.use('/gremio', gremio);


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

module.exports = app;
