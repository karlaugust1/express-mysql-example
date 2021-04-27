import * as express from "express"
import { ContactController } from './controller'

const contactController = new ContactController()

const router = express.Router();
router
    .post('/contact', contactController.save)

export default router;
