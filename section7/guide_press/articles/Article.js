const { Sequelize } = require("sequelize");
const connection = require("../database/connection");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // one category has many articles
Article.belongsTo(Category); // one article belongs to category 

// Article.sync({force: true}); // Command to force models to synchronize with the database

module.exports = Article;