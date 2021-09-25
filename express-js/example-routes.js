// memanggil express
const express = require("express");

const app = express();

// tambah middleware baru tanpa ada next
app.use("/tambah-produk", (req, res, next) => {
	console.log("Second middleware");
	res.send("<h2>Tambahkan produk</h2>");
});

app.use("/", (req, res, next) => {
	console.log("Second middleware");
	res.send("<h2>Hello World</h2>");
});

app.listen(2020);
