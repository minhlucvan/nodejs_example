var http = require('http');

var options = {
	port: 80,
	hostname: 'elbot_e.csoica.artificial-solutions.com',
    method: 'GET',
    path: '/cgi-bin/elbot.cgi'
  };

  var req = http.request(options, function(res){
  	var re = "";
  	res.on('data', function(data){
  		re += data;
  	});
  	res.on('end', function(){
  		console.log(re);
  	});
  });
  req.end();
  console.log('end');