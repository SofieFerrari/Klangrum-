import mongoose from "mongoose";

const { Schema, model } = mongoose;

const illustrationsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technique: {
    type: String,
    required: true,
  },
});

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const architectureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  illustrations: [illustrationsSchema],
  events: [eventSchema],
  architecture: [architectureSchema],
});

export const Project = model("Project", projectSchema);
