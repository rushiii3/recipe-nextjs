require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user");
const recipeRoute = require("./routes/recipe");
const ErrorHandler = require("./middleware/ErrorHandler");
const Mongoose = require("mongoose");
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/recipe/", recipeRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

Mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Database connected successfully`);
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect with database `, err.message);
  });

app.use(ErrorHandler);
