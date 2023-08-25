const { name } = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;

app.set('view engine', 'ejs'); // Express will use EJS with view engine
app.use(express.static('public')); // static files : img, css, etc
app.use(bodyParser.urlencoded({extended:false})); // Get information from the form
app.use(bodyParser.json()); // Receive form information in JSON format

// Routes
app.get("/", (req, res) => 
{
    res.render("index");
});

app.get("/questions", (req, res)=> 
{
    res.render("questions");
});

app.post("/savequestion", (req, res)=> 
{
    let title = req.body.title;
    let description = req.body.description;
    res.send("<p>Form received!<br>Title: " + title + "<br>Description: " + description + "</p>");
});

// Server launcher
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