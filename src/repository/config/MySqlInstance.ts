import mysql from 'mysql'

export class MySqlInstance {

    private static _instance: MySqlInstance

    private connection: mysql.Connection

    private constructor() {
        this.connection = mysql.createConnection(
            {
                host: 'localhost',
                user: 'dev',
                password: 'devpassword',
                database: 'macapa_clients',
            }
        )
        this.connect()
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private connect() {
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log(err.message);
                return
            }
        })
    }

    static closeConnection(id: unknown) {
        return this.instance.connection.escape(id)
    }

    public static query(query: string) {
        return this.instance.connection.query(query, (err: Error, results: Object[], fields: []) => {
            if (err) {
                console.log(err)
                return null
            }
            return results
        })
    }

}