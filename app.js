const http = require("http"); // import file di nodejs module

const server = http.createServer((res, req) => {
	console.log(req);
});

server.listen(3000);
