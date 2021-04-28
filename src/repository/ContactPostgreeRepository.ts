import { Contact } from "../model";
import { PostgressInstance } from "./config/PostgresInstance";

export class ContactPostgresRepository {

    async save(contact: Contact){
        const query = `INSERT INTO contacts (nome, celular) VALUES ('${contact.name}', '${contact.cellphone}');`
        await PostgressInstance.query(query)
    }
}