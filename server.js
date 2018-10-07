// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "./app/public")));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log("Friend Finder app is listening on PORT: " + PORT);
});

// const express = require("express");
// const path = require("path");

// var app = express();
// var PORT = 3000;

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require("./routing/apiroutes")(app);
// require("./routing/htmlroutes")(app);

// TotalScore(function(){

// });

// TotalDifference(function(){

// });


// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

  