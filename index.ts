import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer((req, res) => {
  res.end("Init Project");
});

const host = "jamoliddin";
const port = 3000;

server.listen(3000, () => {
  console.log(`Server running on port http://${host}:${port}`);
});
