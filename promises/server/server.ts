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

// HTML file
import { exampleHtml } from "./example-html";
import { exampleJson } from "./example-json";

// Server Configurations
const host = "localhost";
const port = 8000;

// Route Handling
const requestListener = function(req, res) {
  switch (req.url) {
    case "/text":
      // Set Headers
      res.setHeader("Content-Type", "text/plain");

      // Status Code
      res.writeHead(200);

      // Response
      res.end("My first server!");
      break;
    case "/csv":
      // Set Headers
      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        "attachment;filename=identidade.csv"
      );

      // Status Code
      res.writeHead(200);

      // Response
      res.end("id,name,email\n1,Carlos,carlos@gmail.com");
      break;
    case "/html":
      // Set Headers
      res.setHeader("Content-Type", "text/html");

      // Status Code
      res.writeHead(200);

      // Response
      res.end(exampleHtml);
      break;
    case "/json":
      // Set Headers
      res.setHeader("Content-Type", "application/json");

      // Status Code
      res.writeHead(200);

      // Response
      res.end(JSON.stringify(exampleJson));
      break;
  }
};

// Create Server
const server = http.createServer(requestListener);

// Add Configurations
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
