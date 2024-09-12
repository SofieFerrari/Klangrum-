import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js";
import { User } from "./models/userSchema.js"
import { Project } from "./models/projectsSchema.js"
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(express.json()) // För att tolka JSON-data
app.use("/users", userRoutes)

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/klangrum"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

if (process.env.RESET_DB) {
	const seedDatabase = async () => {
		await Project.deleteMany()

		projectData.forEach((project) => {
			new Project(project).save()
		})
	}
	seedDatabase()
}

// Starta servern
app.listen(PORT, () => {
	console.log(`Servern kör på port ${PORT}`)
})
