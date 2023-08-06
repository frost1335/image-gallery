import http, { IncomingMessage, ServerResponse } from "http";
import { config } from "./libs/env";

config();

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.end("Init Project");
  }
);

const host = "localhost";
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port http://${host}:${port}`);
});
