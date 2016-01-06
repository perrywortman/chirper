var express = require('express');

var app = express();

app.set('view engine', 'ejs')
.use(express.static('./dist'))
.get('*', function(req, res){
	res.render('index');
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('App listening on localhost:%s...', port);
});