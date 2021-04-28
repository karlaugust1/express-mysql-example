import { Processor } from "../../interfaces";
import { Contact } from "../../model";
import { ContactPostgresRepository } from "../../repository";

export class VarejaoProcessor implements Processor {

    private readonly repository = new ContactPostgresRepository()

    async save(contacts: Contact[]): Promise<void> {
        const promises = []
        for (const contact of contacts) {
            promises.push(this.repository.save(contact))
        }

        await Promise.all(promises)
    }

}