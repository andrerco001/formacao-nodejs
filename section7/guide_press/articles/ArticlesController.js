const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("<h1>Router : Articles</h1>");
});

router.get("/admin/articles/new", (req, res) => {
    res.send("<h1>Router : Create a new article</h1>");
});

module.exports = router;