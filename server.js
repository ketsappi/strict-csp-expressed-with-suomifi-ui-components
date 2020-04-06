const express = require("express");
const path = require("path");
const csp = require("helmet-csp");
const { v4: uuidv4 } = require("uuid");
const ejs = require("ejs");

const app = express();
const port = 3123;

app.use(express.static(path.join(__dirname, "dist")));

app.use(function(req, res, next) {
  res.locals.nonce = uuidv4();
  next();
});

app.use(
  csp({
    directives: {
      defaultSrc: ["'none'"],
      baseUri: ["'self'"],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
      styleSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
      fontSrc: ["'self'"],
      connectSrc: ["'self'"],
      imgSrc: ["'self'"]
    }
  })
);

ejs.delimiter = "?";
app.set("view engine", "ejs");
app.get("/", function(req, res) {
  res.render(path.join(__dirname, "dist", "index.ejs"), {
    nonce: res.locals.nonce
  });
});

app.listen(port, () => console.log(`Server listening at port ${port}`));
