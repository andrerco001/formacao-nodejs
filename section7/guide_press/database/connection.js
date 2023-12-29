const { Sequelize } = require("sequelize");

const connection = new Sequelize('guide_press', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00'
});

module.exports = connection;