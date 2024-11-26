import express from 'express';
import session from 'express-session';
import cors from 'cors';
import LiveRoutes from './routes/LiveRoutes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.SERVER_PORT || 3000;
        this.initializeMiddleware();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    initializeMiddleware() {
        this.app.use(cors());
    }

    initializeRoutes() {
        this.app.use('/', LiveRoutes);
    }

    initializeErrorHandling() {
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }
}

const server = new Server();
server.start();
