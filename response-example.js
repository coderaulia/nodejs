const http = require("http"); // import file di nodejs module

const server = http.createServer((req, res) => {
	console.log(req.url, req.headers, req.method);

	// sending responses
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Hello Node JS</title></head>");
	res.write("<body>Hello Node JS</body>");
	res.write("</html>");
	res.end();
});

server.listen(2020);
