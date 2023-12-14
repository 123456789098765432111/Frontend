import mongoose, { Schema, model, models } from 'mongoose';

const VideoSchema = new Schema({
  title: String,
  url: String,
  description: String,
});

export const Video = models.Video || model('Video', VideoSchema);

