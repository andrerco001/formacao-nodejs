const { name } = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const serverPort = 4000;
const connection = require("./database/database");
const Question = require("./database/Question");
const Answer = require("./database/Answer");

// Database connection
connection.authenticate().then(()=>{ console.log("Connection has been established successfully!")} ).catch((error)=>{ console.log("Unable to connect to the database:", error) });

app.set('view engine', 'ejs'); // Express will use EJS with view engine
app.use(express.static('public')); // static files : img, css, etc
app.use(bodyParser.urlencoded({extended:false})); // Get information from the form
app.use(bodyParser.json()); // Receive form information in JSON format

// Routes
// list all questions
app.get("/", (req, res) => 
{
    Question.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then((questions)=>
    {
        res.render("index", 
        {
            questions: questions
        });
    });
});

// get question by id
app.get("/question/:id", (req, res) =>
{
    let id = req.params.id;
    Question.findOne(
    {
        where: {id: id}
    }).then((question) => 
    {
        if(question != undefined) // Question found
        {
            res.render("question", {
                question: question
            });
        }
        else // Question not found
        {
            res.redirect("/");
        }
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