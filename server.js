const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

// Middlewares
const errorHandler = require("./middleware/error");

// Body parser: req.body
app.use(express.json());

// Load ENV vars
dotenv.config({ path: "./config/config.env" });
connectDB();

const PORT = process.env.PORT || 5000;
require("./middleware")(app);
require("./routes")(app);
app.use(errorHandler);

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err}`);
  server.close(() => process.exit(1));
});
