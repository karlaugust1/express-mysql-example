import { Pool } from 'pg'

export class PostgressInstance {

    private static _instance: PostgressInstance

    private pool: Pool

    private constructor() {
        this.pool = new Pool({
            user: 'dev',
            host: 'localhost',
            database: 'varejao_clients',
            password: 'devpassword',
            port: 5432,
        })
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public static query(query: string) {
        this.instance.pool.query(query, (error, results) => {
            if (error) {
                throw error
            }

            return results
        })
    }

}