const http = require("http"); // import file di nodejs module

const server = http.createServer((req, res) => {
	console.log(req.url, req.headers, req.method);
});

server.listen(2020);
