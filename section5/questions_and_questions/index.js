const { name } = require("ejs");
const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs'); // Express will use EJS with view engine
app.use(express.static('public')); // static files : img, css, etc

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
    res.send("Form received");
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