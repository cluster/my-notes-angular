var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//
//conf
//

mongoose.connect('mongodb://localhost/my-notes');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

//
//model 
//

var Note = mongoose.model('Note', {
  title : String, 
  content : String
});

//
//routes
//

//listing notes
app.get('/api/notes', function(req, res){
  Note.find(function(err, notes){
    if(err)
      res.send(err);
    res.json(notes);
  });
});

//creating a note
app.post('/api/notes', function(req, res){
  Note.create({
  	title : req.body.title,
  	content : req.body.content
  }, function(err, notes){
      if(err)
        req.send(err);
      res.json(notes);
  })
});

//deleting a note
app.delete('/api/notes/:id', function(req, res){
  Note.remove({
  	_id : req.body.id
  }, function(err, notes){
  	  if(err)
  	  	res.send(err);
  	  res.json(notes);
  })
});

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});
//
//the app!
//
app.listen(8080);
console.log("App started on port 8080");