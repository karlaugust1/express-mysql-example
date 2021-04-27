import { Request, Response } from "express";
import { ContactService } from "../service/ContactService";

export class ContactController {

    async save(req: Request, res: Response) {
        try {
            const service = new ContactService()
            await service.save(req.body)
            res.send("Hi! I'm your getter, be free to do anything");

        } catch (e) {
            console.error(e.message)
            res.status(400).send("Ocorreu um erro inesperado, ao processar a requisição!")
        }
    }

}