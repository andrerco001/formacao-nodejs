const { Sequelize } = require("sequelize");
const connection = new Sequelize('questions_and_answers', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;