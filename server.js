var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('blog.db');
var restapi = express();
restapi.use(bodyParser.json());

restapi.get('/showPosts', function(req, res){
	var query="SELECT * FROM posts";
	db.all(query, function(err, rows) {
		res.json(rows);
	});
});
restapi.get('/showPosts/:postid', function(req, res){
	// res.send(req.params);
	var query="SELECT * FROM posts WHERE post_id=" + req.params.postid + ";";
	db.all(query, function(err, rows) {
		res.json(rows);
	});
});
restapi.post('/addPost', function(req, res){
	var obj=req.body[0];
	// console.log(obj.title);
	var query="INSERT INTO posts (title,body) VALUES('" + obj.title + "','" + obj.body + "')"
	db.all(query, function(err, rows) {
		res.send("row inserted");		
	});
});

restapi.listen(3000);
