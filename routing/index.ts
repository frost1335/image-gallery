import { ServerResponse, IncomingMessage } from "http";
type Route = {
  [key: string]: (req: IncomingMessage, res: ServerResponse) => any;
};

interface RoutingType {
  get: (
    url: string,
    callback: (req: IncomingMessage, res: ServerResponse) => any
  ) => void;
  post: (
    url: string,
    callback: (req: IncomingMessage, res: ServerResponse) => any
  ) => void;
  update: (
    url: string,
    callback: (req: IncomingMessage, res: ServerResponse) => any
  ) => void;
  delete: (
    url: string,
    callback: (req: IncomingMessage, res: ServerResponse) => any
  ) => void;
  launch: (req: IncomingMessage, res: ServerResponse) => void;
  [key: string]: any;
}

class Routing implements RoutingType {
  protected postRoute: Route = {};
  protected getRoute: Route = {};
  protected updateRoute: Route = {};
  protected deleteRoute: Route = {};

  use(routing: RoutingType) {
    const getRoute = this.getRoute;
    const postRoute = this.postRoute;
    const updateRoute = this.updateRoute;
    const deleteRoute = this.deleteRoute;
    this.getRoute = { ...getRoute, ...routing.getRoute };
    this.postRoute = { ...postRoute, ...routing.postRoute };
    this.updateRoute = { ...updateRoute, ...routing.updateRoute };
    this.deleteRoute = { ...deleteRoute, ...routing.deleteRoute };
  }

  get(url: string, callback: (req: IncomingMessage, res: any) => any) {
    this.getRoute[url] = callback;
  }

  post(url: string, callback: (req: IncomingMessage, res: any) => any) {
    this.postRoute[url] = callback;
  }

  update(url: string, callback: (req: IncomingMessage, res: any) => any) {
    this.updateRoute[url] = callback;
  }

  delete(url: string, callback: (req: IncomingMessage, res: any) => any) {
    this.deleteRoute[url] = callback;
  }

  launch(req: IncomingMessage, res: ServerResponse) {
    const routing: { [key: string]: Route } = {
      get: this.getRoute,
      post: this.postRoute,
      update: this.updateRoute,
      delete: this.deleteRoute,
    };
    if (req.method !== undefined && req.url !== undefined) {
      const func = routing[req.method.toLowerCase()]?.[req.url || "/"];
      if (typeof func === "function") {
        func(req, res);
      } else {
        res.statusCode = 404;
        res.end("404 route is not found.");
      }
    } else {
      res.statusCode = 500;
      res.end("Iternal Server error.");
    }
  }

  [key: string]: any;
}

export default new Routing();
