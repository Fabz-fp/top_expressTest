const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welcome home!"));

module.exports = indexRouter;