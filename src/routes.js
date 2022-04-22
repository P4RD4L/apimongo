const express = require("express");
const routes = express.Router();
const clientController = require("./controller/clientController");
const LoginController = require("./controller/LoginController");
const ClientMiddleware = require("./middleware/ClientMiddleware");
const AuthMiddleware = require("./middleware/AuthMiddleware");

routes.get("/", (request, response) => response.send("Hello world"));
routes.get("/client", AuthMiddleware, clientController.index);

routes.post("/client", clientController.store);
routes.post("/login", LoginController.index);

//TESTE
//routes.post("/login-token", LoginTokenController.index);
//TESTE

routes.put("/client/:id", ClientMiddleware.validateId, clientController.update);

routes.delete("/client/:id", ClientMiddleware.validateId, clientController.delete);

routes.patch("/client/:id", ClientMiddleware.validateId, clientController.updateLike);

module.exports = routes;