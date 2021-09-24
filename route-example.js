const http = require("http"); // import file di nodejs module
const fs = require("fs");

const server = http.createServer((req, res) => {
	// memanggil URL
	const url = req.url;
	// jenis method
	const method = req.method;

	if (url === "/") {
		res.write("<html>");
		res.write("<head><title>Send me a Message</title></head>");
		res.write(
			"<body><form action='/message' method='POST'><input type='text' name='message' placeholder='Message'/><button type='submit'>Send!</button></form></body>"
		);
		res.write("</html>");
		return res.end();
	}
	if (url === "/message" && method === "POST") {
		const body = [];

		// listen data yang telah diinput oleh user di form
		req.on("data", (chunk) => {
			body.push(chunk);
		});

		// mengambil data yg telah di-listen
		req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			// membelah respon di index pertama (message)
			const message = parsedBody.split("=")[1];
			// menggunakan fungsi menulis file ke txt tanpa syncronous
			fs.writeFile("message.txt", message, (err) => {
				// status http
				res.statusCode = 302;
				// setting header ke root
				res.setHeader("Location", "/");
				// end
				return res.end();
			});
		});
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Hello Node JS</title></head>");
	res.write("<body>Hello Node JS</body>");
	res.write("</html>");
	res.end();
});

server.listen(2020);
