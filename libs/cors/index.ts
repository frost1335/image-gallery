import { ServerResponse, IncomingMessage } from "http";
interface OptionType {
  req: IncomingMessage;
  res: ServerResponse;
  origin: string[] | "*";
}

class Cors {
  enable({ req, res, origin }: OptionType) {
    if (origin === "*") {
      res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
      const reqOrigin = req.headers.origin;
      if (!reqOrigin) return false;
      if (origin.includes(reqOrigin)) {
        res.setHeader("Access-Control-Allow-Origin", reqOrigin);
      }
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return true;
  }
}

export default new Cors();
