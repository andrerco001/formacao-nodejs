const { name } = require("ejs");
const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs'); // Express will use EJS with view engine
app.use(express.static('public')); // static files : img, css, etc

app.get("/:name/:lang", (req, res) => 
{
    let name = req.params.name;
    let lang = req.params.lang;
    let showMessage = false;

    let products = [
        {name: "Coca-Cola", price: 2.25},
        {name: "7Up", price: 2.10},
        {name: "Crush", price: 1.75},
        {name: "Redbull", price: 6.50},
        {name: "Orange juice", price: 3.45},
        {name: "Chocolate", price: 5.25}
    ];

    res.render("index", 
    {
        name: name,
        lang: lang,
        company: "Questions&&Answers Solutions",
        customers: 8000,
        msg: showMessage,
        products: products
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