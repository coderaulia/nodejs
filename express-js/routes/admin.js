const path = require("path");
const express = require("express");

// memanggil router
const router = express.Router();

// tambah middleware baru tanpa ada next
router.use("/add-product", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// different request
router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
