const express = require("express");
const router = express.Router();
const bd = require("../Schema/connection")


router.get("/",async (req,res) =>{
    const listUser = await bd.query("SELECT * FROM Testes")

    res.send(listUser.rows)
})





module.exports = router