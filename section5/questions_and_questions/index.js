const { name } = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const serverPort = 4000;
const connection = require("./database/database");
const Question = require("./database/Question");

// Database connection
connection.authenticate().then(()=>{ console.log("Database successfully connected!")} ).catch((error)=>{ console.log(error) });

app.set('view engine', 'ejs'); // Express will use EJS with view engine
app.use(express.static('public')); // static files : img, css, etc
app.use(bodyParser.urlencoded({extended:false})); // Get information from the form
app.use(bodyParser.json()); // Receive form information in JSON format

// Routes
// list all questions
app.get("/", (req, res) => 
{
    Question.findAll({raw: true}).then((questions)=>
    {
        res.render("index", 
        {
            questions: questions

        });
    });
});

// make a question
app.get("/questions", (req, res)=> 
{
    res.render("questions");
});

// save
app.post("/savequestion", (req, res)=> 
{
    let title = req.body.title;
    let description = req.body.description;
    Question.create({
        title: title,
        description: description
    }).then(()=>{
        res.redirect("/");
    });
});

// Server launcher
app.listen(serverPort, (error) => 
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