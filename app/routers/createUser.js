const express = require("express");
const router = express.Router();
const bd = require("../Schema/connection");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  try {
    const listUser = await bd.query("SELECT * FROM Users");
    res.send(listUser.rows).status(200);
  } catch (err) {
    res.send(err).status(400);
  }
});

router.post("/", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const senha = await bcrypt.hashSync(req.body.password, salt);
  try {
    await bd.query(
      `INSERT INTO Users(name,lastName,CPF,RG,Email,Password) VALUES ('${req.body.name}','${req.body.lastName}','${req.body.cpf}','${req.body.rg}','${req.body.email}','${senha}')`
    );
    res.status(201).send("Ok");
  } catch (err) {
    res.send(err).status(400);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await bd.query(`DELETE FROM Users WHERE id = ${req.params.id}`);
    res.status(200).send("Deletado");
  } catch (err) {
    res.status(204).send("Não foi deletado");
  }
});
module.exports = router;
