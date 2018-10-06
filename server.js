const express = require("express");
const path = require("path");

var app = express();
var PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

TotalScore(function(){

});

TotalDifference(function(){

});












app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  