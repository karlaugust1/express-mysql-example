import * as express from "express"
import { Client } from "../../src/model";

declare global {
    namespace Express {
        interface Request {
            client: Client
        }
    }
}