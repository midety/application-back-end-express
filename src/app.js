import express, { json, urlencoded } from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

require('./config/mongoosefile.js');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
