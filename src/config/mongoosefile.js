import { config } from 'dotenv';
import mongoose from 'mongoose';
import dotenvExpand from 'dotenv-expand';

config();

const { parsed } = dotenvExpand({ parsed: process.env });

console.log(parsed['MONGO_URL']);
const connect = mongoose.createConnection(parsed['MONGO_URL'], {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.model(
  'Application',
  require('../application/schema/SchemaApplication'),
);
connect.model(
  'Application-group',
  require('../application-group/schema/SchemaApplicationGroup'),
);

module.exports = connect;
