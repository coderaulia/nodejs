// memanggil express
const express = require("express");
const bodyParsers = require("body-parser");

const app = express();

// parser
app.use(bodyParsers.urlencoded({ extended: false }));

// tambah middleware baru tanpa ada next
app.use("/add-product", (req, res, next) => {
	res.send(
		"<form method='POST' action='/product'><input type='text' name='title'/><button type='submit'>Add!</button></form>"
	);
});

// different request
app.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

app.use("/", (req, res, next) => {
	res.send("<h2>Hello World</h2>");
});

app.listen(2020);
