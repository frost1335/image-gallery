import { ServerResponse } from "http";
import { IncomingMessage } from "http";
import routing from "./routing";

routing.get("/", (req: IncomingMessage, res: ServerResponse) => {
  res.end("{name: 'Bobur', age: 18}");
});

routing.get("/men/boburman", (req: IncomingMessage, res: ServerResponse) => {

  res.end("Men Boburman")
})

routing.get("/mamura", (req: IncomingMessage, res: ServerResponse) => {
  res.end("Men Ma'muraman")
})


export default routing
