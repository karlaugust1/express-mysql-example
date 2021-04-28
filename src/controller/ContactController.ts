import { Request, Response } from "express";
import { Http } from "../config";
import { SaveContactsDto } from "../dto";
import { ContactService } from "../service";

export class ContactController {

    async save(req: Request, res: Response) {
        try {
            const dto = req.body as SaveContactsDto

            const service = new ContactService()
            await service.save(dto.contacts, req.client)

            res.send(Http.buildSuccess())
        } catch (e) {
            console.error(e.message)
            res.status(400).send(Http.buildError(e.stack))
        }
    }

}