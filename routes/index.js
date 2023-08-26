const express = require("express");
const mainRoutes = express.Router();
const clientRouter = require("./clientRoutes")

function mainRouter(app) {
    app.use("/api/v1/restaurant", mainRoutes);
    mainRoutes.use("/clients", clientRouter);
}


module.exports = mainRouter;