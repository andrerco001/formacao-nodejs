const ejs = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Server port
const port = 4000;

// view engine
app.set('view engine', 'ejs');

// body parser
app.set(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

// routes
app.get("/", (req, res) =>
{
    res.render("index");
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