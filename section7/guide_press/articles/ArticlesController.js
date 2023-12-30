const express = require("express");
const router = express.Router();
const Category = require("../categories/Category");
const Article = require("./Article");
const slugify = require("slugify");

router.get("/admin/articles", (req, res) => {
    Article.findAll({
        include: [{model: Category}]
    }).then(categories => {
        res.render("admin/articles/index", {categories: categories});
    });
});

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories});
    });
});

router.post("/articles/save", (req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title.toLowerCase()),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    });
});

router.post("/articles/delete", (req, res) => {
    let id = req.body.id;
    if(id != undefined) {
        if (!isNaN(id)) { // is a number
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });
        } else { // is not a number
            res.redirect("/admin/articles");
        }
    } else { // is null
        res.redirect("/admin/articles");
    }
});

// update section
router.get("/admin/articles/edit/:id", (req, res) => {
    let id = req.params.id;    
    Article.findByPk(id).then(article => {
        if (article != undefined) {
            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {categories: categories});
            });
        } else {
            res.redirect("/");
        }
    }).catch( error => {
        res.redirect("/");
    });
});

/*
router.post("/articles/update", (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    Article.update({title: title, slug: slugify(title.toLowerCase()), body: body, category: category}, {
        where:{
            id: id
        }
    }).then(() => {
        res.redirect("admin/articles");
    })
});
*/

module.exports = router;