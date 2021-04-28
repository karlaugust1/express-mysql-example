import { Request, Response, NextFunction } from "express";
import * as fs from 'fs'
import { Client } from "../../model";
import { Http } from "../http";


export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers?.["x-access-token"]

    const clientsFile = "clients.json"
    if (!fs.existsSync(clientsFile)) {
        res.status(401).send(Http.buildError(null, "Client not registered"))
    }

    const clients = JSON.parse(Buffer.from(fs.readFileSync(clientsFile)).toString()) as Client[]
    const client = clients.find(c => c.token === token)
    if (client) {
        req.client = client
        next()
    } else {
        res.status(403).send(Http.buildError(null, "Invalid token"))
    }
}