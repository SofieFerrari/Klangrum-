import mongoose from "mongoose";

const { Schema, model } = mongoose;

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

export const ArchitechtureData = model("ArchitectureData", architectureSchema);