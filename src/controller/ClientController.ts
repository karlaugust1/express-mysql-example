import { Request, Response } from "express";
import { ClientService } from "../service";

export class ClientController {

    create(req: Request, res: Response) {
        try {
            const service = new ClientService()
            const token = service.create(req.body)
            res.send({ token });
        } catch (e) {
            console.error(e.message)
            res.status(400).send({ message: e.message })
        }
    }

}