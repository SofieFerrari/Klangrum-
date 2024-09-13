import mongoose from "mongoose";

const { Schema, model } = mongoose;

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

export const Event = model("Event", eventSchema);