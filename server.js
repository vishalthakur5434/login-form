const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy user data
const users = [
  { username: "admin", password: "1234" },
  { username: "vishal", password: "abcd" }
];

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ message: "Login Successful ✅" });
  } else {
    res.json({ message: "Invalid Username or Password ❌" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});