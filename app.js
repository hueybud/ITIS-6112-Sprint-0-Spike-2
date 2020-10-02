var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "itis6112"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var helloWorld = 'Hello World';

app.listen('3000');

app.get('/', function(req, res){
    con.query("SELECT * FROM USERS", function (err, result, fields){
        if (err) throw err;
        console.log(result);
        res.render('page', {queryResults: result, helloWorld: helloWorld});
    })
})
