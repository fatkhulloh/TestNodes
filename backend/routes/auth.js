const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// user hardcode (simple auth)
const USER = {
  id: 1,
  username: "admin",
  password: "123456",
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== USER.username || password !== USER.password) {
    return res.status(401).json({ message: "Username or password wrong" });
  }

  const token = jwt.sign(
    { id: USER.id, username: USER.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login success",
    token,
  });
});

module.exports = router;
