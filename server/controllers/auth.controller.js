import bcrypt from "bcryptjs";
import DB from "../database/database.js";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // check if user exists
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  const { username, email, password } = req.body;

  DB.query(q, [email, username], (error, data) => {
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    if (data.length) {
      return res.status(500).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash/Encrypt password from intruders and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // insert user into user table
    const q = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [username, email, hash];

    DB.query(q, values, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
      }
      return res
        .status(200)
        .json({ success: true, message: "Account created." });
    });
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const q = "SELECT * FROM users WHERE username = ?";
  DB.query(q, [username], (error, data) => {
    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }

    if (data.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // Check if password is correct
    const user = data[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong username or password." });
    }

    // If user exists and password is correct, create token
    const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Remove password from user object before sending the response
    const { password: _, ...other } = user;

    res
      .cookie("X_Auth_Token", token, {
        httpOnly: true,
        path: "/",
        sameSite: "none",
        secure: true,
        maxAge: 1 * 60 * 1000,
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {
  res
    .clearCookie("X_Auth_Token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json({
      success: true,
      message: "Logout successful.",
    });
};
