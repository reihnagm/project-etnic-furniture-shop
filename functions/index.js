const functions = require('firebase-functions');
const express = require("express");
const app = express();
const consolidate = require("consolidate");
app.engine("pug", consolidate.pug);
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (request, response) => {
	response.render("index");
});

exports.app = functions.https.onRequest(app);
