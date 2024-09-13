import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import expressListEndpoints from "express-list-endpoints";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { User } from "./models/userSchema.js";
import { Illustration } from "./models/illustrationsSchema.js";
import { Event } from "./models/eventSchema.js";
import { Architecture } from "./models/architectureSchema.js";

mongoose.connect()

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json()); // För att tolka JSON-data
app.use("/users", userRoutes);

// MongoDB setup
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/klangrum";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Läs in JSON-data med fs
const illustrationData = JSON.parse(
  fs.readFileSync(path.resolve("data/Illustrations.json"), "utf8"),
);
const eventData = JSON.parse(
  fs.readFileSync(path.resolve("data/EventData.json"), "utf8"),
);
const architectureData = JSON.parse(
  fs.readFileSync(path.resolve("data/ArchitectureData.json"), "utf8"),
);

// Seed databasen
if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    try {
      // Clear existing collections
      await Illustration.deleteMany();
      await Event.deleteMany();
      await Architecture.deleteMany();

      // Seed collections
      await Illustration.insertMany(illustrationData);
      await Event.insertMany(eventData);
      await Architecture.insertMany(architectureData);

      console.log("Database seeded successfully");
    } catch (error) {
      console.error("Error seeding database:", error);
    }
  };
  seedDatabase();
}

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern kör på port ${PORT}`);
});
