const express = require("express"); // importing the express
const app = express(); // starting the express

// route
app.get("/", function(request, response)
{
    // request  : data sent by the user 
    // response : response that will be sent to the user
    response.send("<h1>Welcome to my website!</h1>");
}); 

app.get("/blog", function(request, response)
{
    response.send("<h1>Welcome to my blog!</h1>");
});

/*
app.get("/channel/youtube", function(request, response)
{
    response.send("<h1>Welcome to my youtube channel!</h1>");
});
*/

// route with optional parameters
app.get("/blog/:article?", function(request, response)
{
    let article = request.params.article;
    if(article)
    {
        response.send(`<h1>Article: ${article}!</h1>`);
    }
    else
    {
        response.send(`<h1>Welcome to my blog!</h1>`);
    }
});

// route with mandatory parameters
app.get("/hello/:name/:company", function(request, response)
{
    let name = request.params.name;
    let company = request.params.company;
    response.send(`<h1>Hello ${name}, company: ${company}</h1>`);
});

// query parameters
app.get("/channel/youtube", function(request, response)
{
    let query = request.query["canal"];
    if(query)
    {
        response.send(`<h1>Welcome to my youtube channel: ${query}</h1>`);
    }
    else
    {
        response.send("No channel provided!");
    }
});

// Starting a server
app.listen(4000, function(error)
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