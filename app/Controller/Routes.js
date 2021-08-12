const express = require("express");
const router = express.Router();
const createUser = require("../routers/createUser");
const login= require("../routers/login");
router.use("/api/User", createUser);
router.use("/api/Login", login);

module.exports = router;
