import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

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

app.post("/register", (req, res) => {
  const { username, passowrd } = req.body;
  res.json({ requestData: { username, passowrd } });
});
