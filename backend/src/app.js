const express = require('express');
const app = express();
const indexRoute = require("./routes/index");
const routesRoutes = require("./routes/routesRoutes");

// Middleware
app.use(express.json());


app.use("/",indexRoute);
app.use("/api",routesRoutes)

module.exports = app;