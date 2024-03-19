// Import necessary modules
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../database/models/user_model.js";

// Register a new user
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, 'ea25fdab8a2a180357d853c625bc01370bf076a1be47f46ad7fc5acf697ec806', {
      expiresIn: '1 hour'
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};