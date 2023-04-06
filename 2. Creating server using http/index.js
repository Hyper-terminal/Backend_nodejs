const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Server is up woohoo");
});

server.listen(4000, "localhost", () => {
  console.log("Server running at http://localhost:4000/");
});
