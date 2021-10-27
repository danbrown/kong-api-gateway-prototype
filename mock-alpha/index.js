const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// @ HEALTY STATUS CHECK MIDDLEWARE
const checkHealth = (req, res, next) => {
  // check healty logic here
  // example: check database connection, amqp connection, etc
  const healty = true;
  if (!healty) {
    res.status(500).json({ status: "unhealty" });
  }
  next(); // go to next middleware
};
// HEALTY STATUS CHECK ROUTE
app.get("/status", checkHealth, (req, res) => {
  // Status here is healty, do other things here after the check if needed
  res.status(200).json({ status: "healty" });
});
// @ HEALTY STATUS MIDDLEWARE END

// @ HOME SERVICE ROUTES
app.get("/home", (req, res) => {
  res.status(200).send("Alpha Home!");
});

app.get("/home/sub", (req, res) => {
  res.status(200).send("Alpha Home Subpath!");
});

app.get("/home/secret", (req, res) => {
  res.status(200).send("Alpha Home Subpath Secret!");
});
// @ HOME SERVICE ROUTES END

// @ SECRET SERVICE ROUTES
app.get("/secret-path", (req, res) => {
  res.status(200).send("I'm Alpha secrect path!");
});

app.get("/secret-path/sub", (req, res) => {
  res.status(200).send("I'm Alpha secrect subpath!");
});
// @ HOME SERVICE ROUTES END

app.listen(PORT, HOST);
