import express from "express"

import { User } from "../models/userSchema"

const router = express.Router()

//register new user route
router.post("/register", async (req, res) => {
	try {
		const { userName, password } = req.body

		if (!userName) {
			return res.status(400).json({ message: "Please choose a username." })
		}
		if (!password) {
			return res.status(400).json({ message: "Please choose a password" })
		}

		if (password.length < 8) {
			return res
				.status(400)
				.json({ message: "Password must be at least 8 characters long." })
		}

		const user = new User({
			userName: userName,
			password: bcrypt.hashSync(password, 10),
		})
		await user.save()
		res.status(201).json({
			message: `The registration was successfull ${user.userName}. You are welcome to log in.`,
			id: user._id,
			accessToken: user.accessToken,
		})
	} catch (error) {
		console.error("Register Endpoint", error)
		res.status(400).json({ message: "Could not register user." })
	}
})

//login route
router.post("/login", async (req, res) => {
	try {
		const { userName, password } = req.body()

		const user = await User.findOne({ userName: userName })

		if (user) {
			const isPasswordCorrect = await bcrypt.compare(password, user.password)
			if (isPasswordCorrect) {
				res.status(202).json({
					message: `Welcome ${user.userName}.`,
					id: user._id,
					accessToken: user.accessToken,
				})
			} else {
				res.status(401).json({ message: "Incorrect password, try again." })
			}
		} else {
			res.status(404).json({
				message: "Could not find an account with this userName",
			})
		}
	} catch (error) {
		res.status(500).json({ message: "Login failed" })
	}
})
