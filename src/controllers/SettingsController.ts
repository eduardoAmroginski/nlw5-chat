import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

    async create(request: Request, response: Response){
        const { chat, username } = request.body;

        const settingsServce = new SettingsService();

        try {
            const settings = await settingsServce.create({ chat, username });

            return response.json(settings);
        } catch (error) {
            return response.status(400).json({
                message: error.message,
            })
        }
    }

}

export { SettingsController }