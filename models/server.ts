import express, { Application } from 'express'
import empresaRoute from '../routes/empresa'
import empleadoRoute from '../routes/empelado'
import cors from 'cors'

import db from '../db/connection'


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        empresas: '/api/empresas',
        empleados: '/api/empleados'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('DB Connected');
        } catch (error) {
            if (error instanceof Error) {
              const message = error.message
              throw new Error(message)
            } else {
              const message = String(error)
              throw new Error(message)
            }
          }
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}!!!`)
        })
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // LECTURA BODY
        this.app.use( express.json() );
        // Carpeta Publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.empresas, empresaRoute);
        this.app.use(this.apiPaths.empleados, empleadoRoute)
    }


}

export default Server
