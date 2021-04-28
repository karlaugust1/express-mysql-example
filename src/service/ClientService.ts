import * as fs from 'fs'
import jwt from "jsonwebtoken"

import { Client } from "../model";

export class ClientService {

    private readonly clientsFile = "clients.json"
    private readonly secret = "theclientsecret"

    create(client: Client) {
        let clients: Client[] = []

        if (fs.existsSync(this.clientsFile)) {
            clients = JSON.parse(Buffer.from(fs.readFileSync(this.clientsFile)).toString())
        }

        const _client = clients.find(c => c.name === client.name)
        if (_client) {
            throw new Error("Cliente já cadastrado");
        }

        const token = jwt.sign({ name: client.name }, this.secret)
        clients.push({
            ...client,
            token
        })

        fs.writeFileSync(this.clientsFile, JSON.stringify(clients))

        return token;
    }

}