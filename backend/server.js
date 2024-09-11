const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
import userRoutes from "./routes/user"

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
		await Projects.deleteMany()

		projectData.forEach((project) => {
			new Projects(project).save()
		})
	}
	seedDatabase()
}

// Starta servern
app.listen(PORT, () => {
	console.log(`Servern kör på port ${PORT}`)
})
