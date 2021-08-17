const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

//routes
const userRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const bodyParser = require("body-parser");

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

app.use(express.json());
app.use(bodyParser());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Server hit",
  });
});

app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
