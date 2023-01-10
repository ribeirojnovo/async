// Let's create a simple NODE http service

// HTTP
// Method: GET
// Host: "localhost"
// Port: 8000
// Response:
//    - Status: 200
//    - Message: 'My first server!'

// Default Package
import * as http from "http";

// Server Configurations
const host = "localhost";
const port = 8000;

// Route Handling
const requestListener = function(req, res) {
  // Set Headers
  res.setHeader("Content-Type", "text/plain");

  // Status Code
  res.writeHead(200);

  // Response
  res.end("My first server!");
};

// Create Server
const server = http.createServer(requestListener);

// Add Configurations
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
