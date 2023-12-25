const { Sequelize } = require("sequelize");

const connection = new Sequelize('guide_press', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;