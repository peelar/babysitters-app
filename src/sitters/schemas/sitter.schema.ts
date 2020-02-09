import * as mongoose from 'mongoose';

export const SitterSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  gender: String,
});
