import express, { json, urlencoded } from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { router } from './application-group';

require('./config/mongoosefile.js');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/application-group/v1', router);

module.exports = app;
