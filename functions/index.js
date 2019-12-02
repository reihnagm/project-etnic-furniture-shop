const functions = require('firebase-functions');
const express = require("express");
const cons = require("consolidate");
const app = express();

app.engine("jade", cons.jade);
app.set("view engine", "jade");
app.set("views", "./views");

app.get("/", (req, res) => {
		res.render("index2");
});

exports.app = functions.https.onRequest(app);
