const { Sequelize } = require("sequelize");
const connection = require("../database/connection");

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({force: true}); // Command to force models to synchronize with the database

module.exports = Category;