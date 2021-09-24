const http = require("http");

// memanggil express
const express = require("express");

const app = express();

const server = http.createServer(app);

server.listen(2020);
