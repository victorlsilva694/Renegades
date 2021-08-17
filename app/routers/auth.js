const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Model/userModel");

router.post("/", async (req, res) => {
  const senha = req.body.senhaUser;
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (await user == null) {
      res.status(400).send("Email not found");
    }
    const veridico = await bcrypt.compareSync(senha,user.senha)
    res.send(veridico);
  } catch (err) {
    res.send(err)
  }
});

module.exports = router;
