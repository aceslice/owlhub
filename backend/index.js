const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/userModel");
const User = require("./models/userModel");
require("dotenv").config();
const app = express();
app.use(cors());

app.use(express.json());
mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.json({ message: "Working" });
});
app.get("/api/all", async (req, res) => {
  const data = await userModel.find({});
  res.json(data);
});
app.post("/api/login", async (req, res) => {
  const body = req.body;
  const user = await User.find({ email: body.email });
  if (user) {
    res.status(200).json(user);
  }
});

app.post("/api/signup", async (req, res) => {
  const body = req.body;
  const user = await User.find({ email: body.email });
  if (user && user.length != 0) {
    res.json("A user with email already exists");
  } else {
    res.json(
      "No user with this the email found. You may proceed to create a new account"
    );
  }
});
