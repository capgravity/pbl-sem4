const express = require("express");
const app = express();
const indexRoute = require("./routes/index");
const routesRoutes = require("./routes/routesRoutes");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true,
  })
);

app.use("/", indexRoute);
app.use("/api", routesRoutes);

module.exports = app;
