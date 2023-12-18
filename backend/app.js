const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
require("express-async-errors");

const { fallBack, errorHandler } = require("./middlewares/error.middleware");
const { responseHandler } = require("./middlewares/response.middleware.js");
const { generatePrices } = require("./helpers/price.helper.js");
const router = require("./routes/index.js");

// Database Connection
const db = require("./models/index.js");
db.sequelize
    .authenticate()
    .then(function () {
        console.log("Database connected");
        generatePrices()
    })
    .catch(function (err) {
        console.log("[ERROR] Something went wrong with database connection!\n", err);
    });


const app = express();

// Start Using Middlewares 

// Parse requests of content-type: application/json 
app.use(express.json({ extended: true, limit: "50mb" }));
// Parse requests of content-type: application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(helmet());
// Allow cross origin access 
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);

// Node Request Logger 
app.use(logger("dev"));

// Main response handler 
app.use(responseHandler);

// Main application router 
app.use(router)

// If Route Not Exits Then Show Message 
app.use(fallBack);
// For Catching and Handling Default Errors 
app.use(errorHandler);

module.exports = app;
