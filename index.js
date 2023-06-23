const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err));

app.use("/app/api", userRoute);

app.get("/", async (req, res) => {
    res.status(200).json("Server is running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
