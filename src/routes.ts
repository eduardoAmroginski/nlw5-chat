import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";

import { SettingsRepository } from "./repositories/SettingsRepository";

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

routes.post("/settings", settingsController.create);

export { routes };