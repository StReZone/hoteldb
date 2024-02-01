const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Route
const AuthRoute = require('./api/routes/auth');
const TrxRoute = require('./api/routes/transaction');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/auth',AuthRoute);
app.use('/transaction',TrxRoute);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status=404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
});

module.exports = app;