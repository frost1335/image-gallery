import http, { IncomingMessage, ServerResponse } from "http";
import { config } from "./libs/env";
import routing from "./routing";
import home from "./server";
config();

routing.use(home);

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method !== undefined && req.url !== undefined) {
      const func = routing[req.method.toLowerCase() + "Route"]?.[req.url || "/"];
      if (typeof func === "function") {
        func(req, res);
      }else{
        res.statusCode = 404
        res.end("404 route is not found.")
      }
    } else {
      res.end("Iternal Server error.");
    }
  }
);

const host = "localhost";
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port http://${host}:${port}`);
});
