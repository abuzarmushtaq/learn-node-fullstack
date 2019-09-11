let http = require('http'); // import 'http' library

// create a simple server object:
let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
})

server.listen(8080); //the server object listens on port 8080