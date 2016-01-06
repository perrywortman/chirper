var express = require('express');

express()
.set('view engine', 'ejs')
.use(express.static('./dist'))
.get('*', function(req, res){
	res.render('index');
})
.listen(3000, function () {
  console.log('App listening on localhost:3000...');
});