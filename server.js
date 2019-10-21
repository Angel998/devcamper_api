const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Load ENV vars
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;
require("./middleware")(app);
require("./routes")(app);
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
