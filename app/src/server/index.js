const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter.js");
const authRouter = require("./routes/authRouter");
const shgRouter = require("./routes/shgRouter");
const productRouter = require("./routes/productRouter");
const { PORT, db } = require("./config.js");

const app = express();

// middlewares
app.use(express.json());

app.use(cookieParser());

//routers
app.use(authRouter);
app.use(userRouter);
app.use(shgRouter);
app.use(productRouter);

const connection = mongoose
  .connect(db)
  .then((data) => {
    console.log(" mongodb connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, "0.0.0.0", function () {
  console.log(`connectes at port ${PORT}`);
});
