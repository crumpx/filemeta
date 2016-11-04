var express = require('express');
var multer = require('multer');
var path = require('path');
var upload = multer({ storage: multer.memoryStorage({}) });

var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'public'));
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080, function(){
	console.log('server running...');
});

app.get('/', function(req, res){
	res.render('index');
});

app.post('/', upload.single('file'), function(req, res, next){
  res.send({size:req.file.size});
});