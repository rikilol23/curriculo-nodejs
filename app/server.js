"use strict";

const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const isProd = process.env.NODE_ENV === "production" ? true : false;
const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.all("/", (req, res) => {
  res.send("Hello by Ricardo Quintero!!!");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send("Error: 404 File not found!!!");
});


app.listen(...isProd ? [ PORT ] : [ PORT, () => {
  console.log("Server running at: 'http://localhost:8000'");
}]);