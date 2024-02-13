const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/userModel");
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
app.get("/api/all", async (req, res) => {
  const data = await userModel.find({});
  res.json(data);
});
app.post("/api/login", (req, res) => {
  const data = req.body;
  res.json("Login data received");
});
