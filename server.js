// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app/public"));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("Friend Finder app is listening on PORT: " + PORT);
});


  