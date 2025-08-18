import express from "express";
const app = express();
import fs from "node:fs";

const hostname = "localhost";
const port = 8080;


app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("contact-me.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});

app.get("/", (req, res) => {
  fs.readFile("404.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data);
  });
});



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
