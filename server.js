
var express = require("express");
var path = require("path");

var PORT = 8090;


var app = express();
// Create our server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"))

// });

// app.post("/api/meetme", function(req, res){
//     console.log(req.body)
// })

// require(path.json(__dirname, "./app/routing/apiRoutes"));
// require(path.json(__dirname, "./app/routing/htmlRoutes"));

// Starts our server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});