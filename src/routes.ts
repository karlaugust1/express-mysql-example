import * as express from "express"
import { auth } from "./config/middlewares/auth";
import { ContactController, ClientController } from './controller'

const contactController = new ContactController()
const clientController = new ClientController()

const router = express.Router();
router
    .post('/contact', auth, contactController.save)
    .post('/client', clientController.create)

export default router;
