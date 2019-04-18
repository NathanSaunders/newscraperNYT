// Require dependancies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up port to be the host's designated port or 3000
var PORT = process.env.PORT || 3000;

//Intiate Express App
var router = express.Router();

//Designate public folder as a static directory
app.use(express.static(__dirname + "/public"));

//Connect Handlebars to Express app
app.engine(
  "handlebars",
  expressHandlebars({
    defaulatlayout: "main"
  })
);
app.set("view engine", "handlebars");

//Use bodyParser in app
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Have every request go through router middleware
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect mongoose to database
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("mongoose connection is successful");
  }
});

//Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
