const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get("/:name/:lang", (req, res) => 
{
    res.render("index", 
    {
        name: req.params.name,
        lang: req.params.lang,
        company: "Questions&&Answers Solutions",
        customers: 8000
    });
});

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