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



export const Illustration = model("Illustration", illustrationsSchema);
