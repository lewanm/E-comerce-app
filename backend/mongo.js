require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_DB_URI = process.env.MONGO_DB_URI;
const connectionString = MONGO_DB_URI;

//conexion a mongoDB

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
