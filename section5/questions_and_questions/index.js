const { name } = require("ejs");
const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get("/:name/:lang", (req, res) => 
{
    let name = req.params.name;
    let lang = req.params.lang;
    let showMessage = false;

    res.render("index", 
    {
        name: name,
        lang: lang,
        company: "Questions&&Answers Solutions",
        customers: 8000,
        msg: showMessage
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