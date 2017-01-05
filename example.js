var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(request, response) {
  console.log('Incoming ' + request.method + 'request!');
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('<h1>Hello</h1>\n');
  response.end();
});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
