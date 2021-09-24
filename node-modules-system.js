const http = require("http"); // import file di nodejs module
// import routes.js
const routes = require("./routes");

// execute routes
const server = http.createServer(routes);

server.listen(2020);
