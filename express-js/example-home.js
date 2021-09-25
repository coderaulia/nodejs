const path = require("path");
// memanggil express
const express = require("express");
const bodyParsers = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// parser
app.use(bodyParsers.urlencoded({ extended: false }));

// memanggil routes dari routes/admin.js
app.use("/admin", adminRoutes);

app.use(shopRoutes);

// 404 Handler
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(2020);
