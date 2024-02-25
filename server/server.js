import express from "express";
import cors from "cors";
const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, passowrd } = req.body;
  res.json({ requestData: { username, passowrd } });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
