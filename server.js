var fs = require("fs");
var http = require("http");

// const data =
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/home" || pathName === "/") {
    fs.readFile("./home.html", "utf-8", (err, data) => {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.end(data);
    });
  } else if (pathName === "/contact") {
    fs.readFile("./contact.html", "utf-8", (err, data) => {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.end(data);
    });
  } else if (pathName === "/about") {
    fs.readFile("./about.html", "utf-8", (err, data) => {
      res.writeHead(200, {
        "Content-type": "text/html",
      });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});
server.listen(8000, "localhost");
