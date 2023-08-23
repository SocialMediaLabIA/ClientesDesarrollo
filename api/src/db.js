require("dotenv").config();

const mongoose = require("mongoose");

const { URI } = process.env;
const DB_URI = URI;

console.log(DB_URI);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("********* CONEXIÓN CORRECTA *******");
    console.log(DB_URI);
  })
  .catch((err) => {
    console.log("********* ERROR DE CONEXIÓN *******");
    console.error(err);
  });
