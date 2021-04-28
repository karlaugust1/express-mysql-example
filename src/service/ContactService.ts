import { Processor } from '../interfaces'
import { Client, Contact } from '../model'
import { ContactMySqlRepository } from '../repository'
import { MacapaProcessor } from './processors'
export class ContactService {

    private processors = new  Map<string, Processor>()

    constructor() {
        this.processors.set('macapa', new MacapaProcessor())
    }

    async save(contacts: Contact[], client: Client) {

        const processor = this.processors.get(client.city)
        if (!processor) {
            throw new Error("Nenhum processador foi encontrado para o cliente!");
        }

        await processor.save(contacts)
    }
}