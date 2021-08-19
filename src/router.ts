import express from 'express';
import { Application } from 'express';

// import trainerRouter from '../trainer/trainer.router';
import classRouter from './class/class.router';
import * as bodyParser from 'body-parser';


const router = express.Router();

function routers(app: Application) {
    app.use(bodyParser.json());
    // app.use('/trainer', trainerRouter);
    app.use('/class', classRouter);
}

export default routers;