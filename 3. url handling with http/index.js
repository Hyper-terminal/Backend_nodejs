const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello World!</h1>");
      res.end();
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Page</h1>");
      res.end();
      break;

    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contact Page</h1>");
      res.end();
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
      res.end();
      break;
  }
});

server.listen(4000, () => {
  console.log("server started successfully at port 4000.");
});
