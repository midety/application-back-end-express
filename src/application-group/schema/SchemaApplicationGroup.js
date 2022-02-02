import mongoose from 'mongoose';

const applicationSchemaGroup = new mongoose.Schema({
  SiteURL: { type: String, unique: true },
  img: { type: String, unique: true },
  GroupID: String,
});

module.exports = applicationSchemaGroup;
