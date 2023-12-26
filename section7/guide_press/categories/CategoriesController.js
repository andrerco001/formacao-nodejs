const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("<h1>Router : Categories</h1>");
});

router.get("/admin/categories/new", (req, res) => {
    res.send("<h1>Router : Create a new category</h1>");
});

module.exports = router;