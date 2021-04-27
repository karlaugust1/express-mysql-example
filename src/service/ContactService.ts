import { MySQL } from '../repository/test'

export class ContactService {

    async save(contact: any){
        const query = "select * from contacts"
        MySQL.query(query, (err:Error, results:Object[])=>{
            if(err){
                console.log(err)
            }
            else {
                console.log(results)
            }
        });
        Promise.resolve()
        console.log('YOLOO, btw', contact)
    }
}