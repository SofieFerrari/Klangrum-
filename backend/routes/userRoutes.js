import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import { authenticateUserToken } from "../middleware/authenticateUserToken.js"

const router = express.Router();

// Register new user route
router.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Kontrollera om det redan finns två användare i databasen
    const userCount = await User.countDocuments(); // Räknar hur många användare som finns
    if (userCount >= 2) {
      return res.status(400).json({
        message: "Only two users are allowed. No more users can be created.",
      });
    }

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

    // Skapa och spara den nya användaren
    const user = new User({
      userName: userName,
      email: email,
      password: bcrypt.hashSync(password, 10), // Kryptera lösenordet
    });

    await user.save();

    // Skapa JWT-token för den nya användaren
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.status(201).json({
      message: `The registration was successful ${user.userName}. You are welcome to log in.`,
      id: user._id,
      accessToken: token, // Returnera token till användaren
    });
  } catch (error) {
    console.error("Register Endpoint", error);
    res.status(400).json({ message: "Could not register user." });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign(
          { userId: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
        );
        res.status(200).json({
          message: `Welcome!`,
          id: user._id,
          accessToken: token,
        });
      } else {
        res
          .status(401)
          .json({ message: "Incorrect password, please try again." });
      }
    } else {
      res.status(404).json({
        message: "Could not find an account with this email, please try again",
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

router.get("/admin", authenticateUserToken, (req, res) => {
  if (
    req.user.email === "sofiestrahl@gmail.com" ||
    req.user.email === "Skroder.fanny@gmail.com"
  ) {
    res.status(200).json({ message: "Välkommen till Klangrums adminsida!" });
  } else {
    res
      .status(403)
      .json({ message: "You do not have permission to access this page." });
  }
});

export default router;
