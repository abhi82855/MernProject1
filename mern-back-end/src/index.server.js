const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/auth");

//enviroment variable
env.config();

// Connect MongoDB at default port 27017.
mongoose
  .connect(`mongodb://127.0.0.1:27017/ecommerce`, {
    useNewUrlParser: true,
    userUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  });

app.use(bodyParser());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Server hit",
  });
});

// app.post("/data", (req, res, next) => {
//   res.status(200).json({
//     message: req.body,
//   });
// });
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
