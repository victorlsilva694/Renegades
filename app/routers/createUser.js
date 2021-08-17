const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Model/userModel");

router.get("/", async (req, res) => {
  res.send(await User.findAll());
});

router.post("/", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const senha = await bcrypt.hashSync(req.body.password, salt);
  const user = {
    nome: req.body.name,
    lastName: req.body.lastName,
    cpf: req.body.cpf,
    rg: req.body.rg,
    email: req.body.email,
    senha: senha,
  };
  try {
    await User.create(user);
    res.status(202).send("Ok");
  } catch (err) {
    res.send(400);
  }
});

router.delete("/:id", async (req, res) => {
  const apagar = await User.findByPk(req.params.id);
  await apagar.destroy();
  res.status(204).send("Ok");
});
module.exports = router;
