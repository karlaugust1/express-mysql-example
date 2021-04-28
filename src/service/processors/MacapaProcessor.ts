import { Processor } from "../../interfaces";
import { Contact } from "../../model";
import { ContactMySqlRepository } from "../../repository";

export class MacapaProcessor implements Processor {

    private readonly repository = new ContactMySqlRepository()

    async save(contacts: Contact[]): Promise<void> {
        const promises = []
        for (const contact of contacts) {
            contact.name = contact.name.toUpperCase()
            // This regex formats the phone number as +55 (00) 00000-0000
            contact.cellphone = contact.cellphone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");

            promises.push(this.repository.save(contact))
        }

        await Promise.all(promises)
    }

}