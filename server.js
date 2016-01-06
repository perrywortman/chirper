var express = require('express');
var login = require('./login');

express()
	.set('view engine', 'ejs')
	.use(express.static('./dist'))
	.use(login.routes)
	.get('*', login.required, function(req, res){
		res.render('index', {
			user: login.safe(req.user)
		});
	})
	.listen(3000, function () {
	  	console.log('App listening on localhost:3000...');
	});