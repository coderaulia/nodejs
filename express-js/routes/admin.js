const path = require("path");
const express = require("express");

// root directory
const rootDir = require("../helper/path");

// memanggil router
const router = express.Router();

// tambah middleware baru tanpa ada next
router.use("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// different request
router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
