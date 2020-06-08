import { Server } from '@overnightjs/core';
import { json, urlencoded } from 'express';
import cors from 'cors';


export default class App extends Server {
    constructor() {
        super(process.env.NODE_ENV === 'development');
        this.setupMiddlewares();
    }

    private setupMiddlewares = () => {
        this.app.use(json({ limit: '5mb' }));
        this.app.use(urlencoded({ extended: true }));
        this.app.use(cors());
    }

    private setupControllers = async () => {
        const { default: MonitoringController } = await import('@controllers/monitoring');
        super.addControllers([new MonitoringController()])
    }

    start = (port: number) => {
        this.setupControllers().then(() =>
            this.app.listen(port, () => {
                console.log(`web server listening on [::]:${port}`);
            })
        )
    }
}