const express = require("express");

// memanggil router
const router = express.Router();

// tambah middleware baru tanpa ada next
router.use("/add-product", (req, res, next) => {
	res.send(
		"<form method='POST' action='/product'><input type='text' name='title'/><button type='submit'>Add!</button></form>"
	);
});

// different request
router.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
