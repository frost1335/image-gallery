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
      const thisOrigin = req.headers.origin;
      if (!thisOrigin) {
        res.statusCode = 400;
        res.end();
        return false;
      }
      if (origin.includes(thisOrigin)) {
        res.setHeader("Access-Control-Allow-Origin", thisOrigin);
      } else {
        res.statusCode = 403;
        res.end();
        return false;
      }
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return true
  }
}

export default new Cors();
