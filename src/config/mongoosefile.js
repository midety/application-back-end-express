import { config } from 'dotenv';
import mongoose from 'mongoose';
import dotenvExpand from 'dotenv-expand';

config();

const { parsed } = dotenvExpand({ parsed: process.env });

const connect = mongoose.createConnection(parsed['MONGO_URL'], {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.model(
  'Application',
  require('../application/schema/schema.application'),
);
connect.model(
  'Application-group',
  require('../application-group/schema/schema.application.group'),
);

module.exports = connect;
