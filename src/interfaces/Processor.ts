import { Contact } from "../model";

export interface Processor {
    save(contacts: Contact[]): Promise<void>
}