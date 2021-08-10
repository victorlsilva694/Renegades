const { Pool } = require("pg");
const pool = new Pool({
  user: "root",
  host: "db",
  database: "Renegades",
  password: "Victor123@#!",
  port: 5432,
});

async function teste() {
  try {
    pool.connect();
    console.log("Banco tá on Pai");
  } catch (err) {
    console.error("Banco tá of Pai", err);
  }
}

teste();
module.exports = pool;
