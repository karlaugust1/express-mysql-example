// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from "cors"
// import routes from './routes'

// // Criando as configurações para o ExpressJS
// class App {

//     public express: express.Application;

//     constructor() {
//         this.express = express();
//         this.middleware();
//         this.routesRegister();
//     }

//     private middleware(): void {
//         this.express.use(bodyParser.json({ limit: '10mb' }));
//         this.express.use(bodyParser.urlencoded({ extended: false }));
//         this.express.use(cors({ origin: true }));
//     }

//     private async routesRegister() {
//         // Register your routers        
//         this.express.use('/api/v1/mercafacil', routes);
//     }
// }
// export default new App().express;
