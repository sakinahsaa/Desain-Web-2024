const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = (req, res) => {
  const { email, password, role } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ message: "Hash error" });
    User.create({ email, password: hash, role }, (err, result) => {
      if (err) return res.status(500).json({ message: "Register error" });
      res.json({ message: "User registered" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, result) => {
    if (err || result.length === 0) return res.status(401).json({ message: "Invalid credentials" });
    const user = result[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).json({ message: "Wrong password" });
      const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json({ token, role: user.role });
    });
  });
};