const path = require("path");

const express = require("express");

// root directory
const rootDir = require("../helper/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
	console.log("shop.js", adminData.products);
	res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
