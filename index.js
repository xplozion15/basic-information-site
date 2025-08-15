import { createServer } from "node:http";
import fs from "node:fs";

const hostname = "localhost";
const port = 8080;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(data);
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("contact-me.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(data);
    });
  } else {
    fs.readFile("404.html", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
