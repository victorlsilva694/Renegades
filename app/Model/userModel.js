const Sequelize = require('sequelize')
const database = require('../Schema/connection')

const User = database.define('User',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },

    senha:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    rg: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = User