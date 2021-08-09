
const Sequelize = require('sequelize');

const Connection = new Sequelize('Renegades', 'root', 'Victor123@#!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;