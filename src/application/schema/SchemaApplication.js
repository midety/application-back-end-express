import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: String,
});

module.exports = applicationSchema;
