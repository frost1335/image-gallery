import http, { IncomingMessage, ServerResponse } from "http";
import { config } from "./libs/env";
import routing from "./routing";
import home from "./route";
import cors from "./libs/cors";
config();

routing.use(home);

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const isAllowed = cors.enable({ req, res, origin: ["http://127.0.0.1:5500"] });
    if(!isAllowed) return res.end()
    routing.launch(req, res);
  }
);

const host = "localhost";
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port http://${host}:${port}`);
});
