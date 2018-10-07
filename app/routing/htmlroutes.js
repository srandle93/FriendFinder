// Pull in required dependencies
var path = require("path");

// Export HTML routes
module.exports = function(app) {
	// console.log("___ENTER htmlRoutes.js___");

	// Home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// Survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
  
//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });