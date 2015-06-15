var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

//Create a route handler for the home path
app.get('/', function(req, res){
	res.render('index', {
		title: 'Jeff'
});

});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Sever listening at port: ' + port);
