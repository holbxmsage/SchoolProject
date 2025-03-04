const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to my school project!</h1>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>');
  }
}).listen(8080);
