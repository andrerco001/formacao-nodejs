let http = require("http");
http.createServer(function(request, response)
{
    response.end("<h1>Welcome to my website</h1><h3 style='color:green'>Nodejs programming</h3>");
}).listen(8388);
console.log("Server up");