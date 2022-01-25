import express, { json, urlencoded } from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { router } from './api';
import { ValidationError } from 'express-validation';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.use((err, _req, res, _next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

module.exports = app;