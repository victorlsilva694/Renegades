
/*
const Sequelize  = require("sequelize");
const Connection = require("../Schema/connection");

const UserModel = Connection.define('UserModel', {

    Name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    RG: {
        type: Sequelize.STRING,
        allowNull: true
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: true
    },
    BirthDate: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

UserModel.sync({force: false}).then(() => {});
module.exports = UserModel;*/