import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";

import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 *  --- Exemplo: http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 *  --- Exemplo: http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => Parametros que vem no corpo da requisição
 * --- Exemplo: {"name": "Fulano de tal" }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };