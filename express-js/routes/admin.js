const path = require("path");
const express = require("express");

// root directory
const rootDir = require("../helper/path");

// memanggil router
const router = express.Router();

// mengambil data
router.use("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// mengirim data
router.post("/add-product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;
