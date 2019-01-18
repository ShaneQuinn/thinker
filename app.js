var express = require("express");
var app = express();
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
var local = require('./local');

//mongodb connection
mongoose.connect(local.dbinfo);

//view engine for ejs file
app.set("view engine", "ejs");

//bodyparser for extracting data form ejs pages
app.use(bodyParse.urlencoded({extended: true}));


//mogoose schema
var thinkerSchema = new mongoose.Schema({
    name: String
});

var db = mongoose.model("Thinker", thinkerSchema);

//======Express routes======//

app.get("/", function(req, res) {
    // res.render("index.ejs");
    db.find({}, function(err, data) {
        if(err) console.log(err);
        else {
            res.render("index.ejs", {thoughtList: data});
        }
    });    
});

//add new db item to list
app.post("/new", function(req, res) {
    console.log(req.body.item);
    var newThought = new db({
        name: req.body.item
    });
    db.create(newThought, function(err, db) {
        if(err) console.log(err);
        else {
            console.log("Insert: " + newThought);
        }
    });
    res.redirect("/");
});


//catch all other routes
app.get("*", function(req, res) {
    res.send("all others /*");
});


//express server
app.listen(3000, function() {
    console.log("Server started port 3000");
});
