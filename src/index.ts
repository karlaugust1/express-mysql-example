import express from "express"
import setupMiddlewares from "./config/middlewares"
import routes from './routes'

// This can be get from environment
const port = 3000
const app = express()

setupMiddlewares(app)

app.use("/api/mercafacil", routes)

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))