const express = require("express"); // importing the express
const app = express(); // starting the express

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