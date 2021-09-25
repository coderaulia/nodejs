// memanggil express
const express = require("express");
const bodyParsers = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// parser
app.use(bodyParsers.urlencoded({ extended: false }));

// memanggil routes dari routes/admin.js
app.use(adminRoutes);

app.use(shopRoutes);

app.listen(2020);
