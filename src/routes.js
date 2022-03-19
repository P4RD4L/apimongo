const express = require("express");
const routes = express.Router();
const clientController = require("./controller/clientController");
const ClientMiddleware = require("./middleware/ClientMiddleware");

routes.get("/", (request, response) => response.send("HELLO WORLD"));
routes.get("/client", clientController.index);

routes.post("/client", clientController.store);

routes.put("/client/:id", ClientMiddleware.validateId, clientController.update);

routes.delete("/client/:id", ClientMiddleware.validateId, clientController.delete);

routes.patch("/client/:id", ClientMiddleware.validateId, clientController.updateLike);

module.exports = routes;