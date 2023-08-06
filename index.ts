import http, { IncomingMessage, ServerResponse } from "http";

const uri =
  "mongodb+srv://Dilrozbek:12345678as@myatlasclusteredu.auh1a9y.mongodb.net/gallery-dev";

require("./db/mongodb")(uri);

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.end("Init Project");
  }
);

const host = "jamoliddin";
const port = 3000;

server.listen(3000, () => {
  console.log(`Server running on port http://${host}:${port}`);
});
