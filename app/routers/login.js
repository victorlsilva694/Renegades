const express = require("express");
const router = express.Router();
const bd = require("../Schema/connection");

router.get("/", function (req, res) {
  try {
    bd.query("SELECT * FROM Users", (err, result) => {
      res.send(result.rows);
    });
  } catch (err) {}
});

router.post("/", async (req, res) => {
  /**
   * Email e Senha
   * Verificar se o Email e Senha estão corretos no banco de dados
   * Se sim, criar a sessão do User
   * Se não, retornar o que está errado
   *
   */
  try {
    await bd.query(
      `SELECT * FROM Users WHERE email = '${req.body.email}'`,
      (err, result) => {
        const user = {
          email: result.rows[0].email,
          password: result.rows[0].password,
          name: result.rows[0].name,
          lastname: result.rows[0].lastname,
        };

        res.send(user);
      }
    );
  } catch (err) {}
});

module.exports = router;
