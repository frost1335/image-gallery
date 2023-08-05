import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "text/plain");
      res.write("Hello Home Page");
    }
  }
  if (req.url === "/prod") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "text/plain");
      res.write("Hello Product");
    }
  }
  res.end();
});

const host = "jamoliddin";
const port = 5000;

server.listen(port, () => {
  console.log(`Server running on port http://${host}:${port}`);
});
