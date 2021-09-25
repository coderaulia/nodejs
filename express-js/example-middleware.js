// memanggil express
const express = require("express");

const app = express();

// menambahkan middleware baru
app.use((req, res, next) => {
	console.log("hello middleware");
	// jump to next middleware
	next();
});

app.use((req, res, next) => {
	console.log("Second middleware");
	// send response tanpa perlu menuliskan header, write dsb
	res.send("<h2>Hello World</h2>");
});

app.listen(2020);
