const fs = require("fs");

// create new function
const requestHandler = (req, res) => {
	const url = req.url;
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
			fs.writeFile("message1.txt", message, (err) => {
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
};

// Export modules
module.exports = requestHandler;

// // atau dengan cara
// module.exports = {
// 	handler: requestHandler,
// 	someMessage: "Hello World",
// };

// // atau
// exports.handler = requestHandler;
// exports.someMessage = "Hello World";
