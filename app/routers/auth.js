const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const bd = require("../Schema/connection");

router.post("/", async (req, res) => {
  const senha = req.body.senhaUser;
  try {
    await bd.query(
      `SELECT * FROM Users WHERE email = '${req.body.email}'`,
      async (err, result) => {
        const veridico = await bcrypt.compareSync(
          senha,
          result.rows[0].password
        );
        if (veridico) {
          res.send(true);
        } else {
          res.send(false);
        }
      }
    );
  } catch (err) {}
});

module.exports = router;
