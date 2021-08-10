const express = require("express");
const router = express.Router();
const bd = require("../Schema/connection");

router.get("/", async (req, res) => {
  const listUser = await bd.query("SELECT * FROM Testes");
  res.send(listUser.rows);
});

router.post("/", async (req, res) => {
  const post = await bd.query(
    `INSERT INTO Users(name,lastName,CPF,RG) VALUES ('${req.body.name}','${req.body.lastName}','${req.body.cpf}','${req.body.rg}')`
  );

  res.send("ok");
});

module.exports = router;
