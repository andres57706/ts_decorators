import {Middleware, Get, Controller} from '@overnightjs/core';
import auth from '../middlewares/authorization';

@Controller('api/monitoring')
export default class MonitoringController {
    constructor() {

    }

    @Get('health')
    @Middleware([auth(['basic:health'])])
    health = (req: any, res: any, next: any) => {
        res.status(200).json({ msg: 'OK'})
    }
}

