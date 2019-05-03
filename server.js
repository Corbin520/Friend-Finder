

// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

var express = require("express");
var path = require("path");

var PORT = 0520;


var app = express();
// Create our server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// array that will hold our reservations
//HTML
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./home.html"))

// });


// Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});