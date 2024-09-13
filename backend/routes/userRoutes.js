import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userSchema.js";

const router = express.Router();

// Register new user route
router.post("/register", async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName) {
      return res.status(400).json({ message: "Please choose a username." });
    }
    if (!password) {
      return res.status(400).json({ message: "Please choose a password" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long." });
    }

    const user = new User({
      userName: userName,
      password: bcrypt.hashSync(password, 10),
    });
    await user.save();
    res.status(201).json({
      message: `The registration was successful ${user.userName}. You are welcome to log in.`,
      id: user._id,
      accessToken: user.accessToken,
    });
  } catch (error) {
    console.error("Register Endpoint", error);
    res.status(400).json({ message: "Could not register user." });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName: userName });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        res.status(200).json({
          message: `Welcome ${user.userName}.`,
          id: user._id,
          accessToken: user.accessToken,
        });
      } else {
        res
          .status(401)
          .json({ message: "Incorrect password, please try again." });
      }
    } else {
      res.status(404).json({
        message:
          "Could not find an account with this userName, please try again",
      });
    }
  } catch (error) {
    console.error("Login Endpoint", error);
    res.status(500).json({ message: "Login failed" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await User.find({}).exec(); // Fetch all users

    if (users.length > 0) {
      res.status(200).json({
        users: users,
        message: "Success in retrieving all users.",
      });
    } else {
      res.status(404).json({
        message: "No users found.",
      });
    }
  } catch (error) {
    console.error("Get all users endpoint:", error);
    res.status(500).json({
      message:
        "Sorry, we couldn't retrieve users at this time. Please try again later.",
    });
  }
});

export default router;
