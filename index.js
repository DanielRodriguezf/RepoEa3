const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen_it_event.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1000;

server.use(middlewares);
server.use(router);
server.listen(port);