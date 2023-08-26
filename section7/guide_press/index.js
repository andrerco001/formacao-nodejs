const express = require("express");
const app = express();

// Server port
const port = 4000;

// routes
app.get("/", (req, res) =>
{
    res.send("Welcome to Guidepress");
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