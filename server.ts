import { ServerResponse } from "http";
import { IncomingMessage } from "http";
import routing from "./routing";

routing.get("/", (req: IncomingMessage, res: ServerResponse) => {
  res.end("Birinchi routing");
});

routing.get("/men/boburman", (req: IncomingMessage, res: ServerResponse) => {
  res.end("Men Boburman")
})

export default routing
