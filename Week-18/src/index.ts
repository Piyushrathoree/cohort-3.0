import { createServer } from "https";

const server = createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello, world!");
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});


