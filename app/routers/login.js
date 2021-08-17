const express = require("express");
const router = express.Router();
const User = require("../Model/userModel");

router.post("/", async (req, res) => {
  const resultado = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  try {
    res.send(resultado);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
