const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => 
{
    res.render("index");
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