const express = require("express");
const router = express.Router();
const createUser = require("../routers/createUser");
const login= require("../routers/login");
const auth = require("../routers/auth");
router.use("/api/User", createUser);
router.use("/api/Login", login);
router.use("/api/Auth", auth)
module.exports = router;
