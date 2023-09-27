import { ServerResponse } from "http";
import { IncomingMessage } from "http";
import routing from "./routing";

routing.get("/", (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ name: "Bobur", age: 18 }));
});

routing.get("/men/boburman", (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({men: "Boburman"}));
});

routing.get("/mamura", (req: IncomingMessage, res: ServerResponse) => {
  res.end("Men Ma'muraman");
});

export default routing;
