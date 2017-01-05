var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(request, response) {
  console.log('Incoming ' + request.method + 'request!' + request.url);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  if ( request.url === '/goodbye') {
    response.write('<h1>Goodbye!</h1>');
  } else {
    response.write('<h1>hello</h1>');
  }
  response.end();
});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
