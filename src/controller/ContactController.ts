import { Request, Response } from "express";
import { SaveContactsDto } from "../dto";
import { ContactService } from "../service";

export class ContactController {

    async save(req: Request, res: Response) {
        try {
            const dto = req.body as SaveContactsDto

            const service = new ContactService()
            await service.save(dto.contacts, req.client)

            res.send("Ok!");
        } catch (e) {
            console.error(e.message)
            res.status(400).send(e.message)
        }
    }

}