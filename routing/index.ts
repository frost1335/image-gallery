import { ServerResponse, IncomingMessage } from "http";
type route = {
  [key: string]: (req: IncomingMessage, res: ServerResponse) => any;
};

interface RoutingType {
  getRoute: route;
  postRoute: route;
  updateRoute: route;
  deleteRoute: route;
  get: (url: string, callback: (req: IncomingMessage, res: ServerResponse) => any) => void;
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
}

class Routing implements RoutingType {
  postRoute: route = {};
  getRoute: route = {};
  updateRoute: route = {};
  deleteRoute: route = {};

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

  [key: string]: any;
}

export default new Routing();
