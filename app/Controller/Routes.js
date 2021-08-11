const express = require("express");
const router = express.Router();
const createUser = require("../routers/createUser");

router.use("/api/User", createUser);

module.exports = router;
