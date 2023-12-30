// import section
const ejs = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");

// import controllers
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

// import models
const article = require("./articles/Article");
const category = require("./categories/Category");
const Article = require("./articles/Article");

// Server port
const port = 4000;

// database connection
connection.authenticate().then(() => { console.log("Database connection has been established successfully!") }).catch((error) => { console.log("Unable to connect to the database:", error) });

// view engine
app.set('view engine', 'ejs');

// static files - public - css - img - js
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
    Article.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(articles => {
        res.render("index", {articles: articles});
    });
});

app.get("/:slug", (req, res) => {
    let slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article != undefined) {
            res.render("article", {article: article});
        } else {
            res.redirect("/");
        }
    }).catch(error => {
        res.redirect("/");
    })
});

// server launch
app.listen(port, (error) => 
{
    if(error)
    {
        console.log("An error occured!");
    }
    else
    {
        console.log("Server started successfully!");
    }
});