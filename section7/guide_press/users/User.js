const { Sequelize } = require("sequelize");
const connection = require("../database/connection");

const User = connection.define("users", {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// User.sync({force: false}); // Command to force models to synchronize with the database

module.exports = User;