import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

const salt = bcrypt.genSaltSync(10);

mongoose
  .connect(
    "mongodb+srv://Thirumalai:fKjxJoxpKMNBmm1T@cluster0.zbfaxl3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database is connected");
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
