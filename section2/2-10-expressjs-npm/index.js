const express = require("express"); // importing the express
const app = express(); // starting the express

// route
app.get("/", function(request, response)
{
    response.send("<h1>Welcome to my website!</h1>");
}); 

app.get("/blog", function(request, response)
{
    response.send("<h1>Welcome to my blog!</h1>")
});

app.get("/channel/youtube", function(request, response)
{
    response.send("<h1>Welcome to my youtube channel!</h1>")
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
        console.log("Server started successfully!")
    }
});