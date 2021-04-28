import { Contact } from "../model";
import { MySqlInstance } from "./config/MySqlInstance";

export class ContactMySqlRepository {

    async save(contact: Contact){
        const query = `INSERT INTO contacts (nome, celular) VALUES ('${contact.name}', '${contact.cellphone}');`
        await MySqlInstance.query(query)
    }
}