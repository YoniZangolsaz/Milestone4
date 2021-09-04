import express, { Application } from 'express';

import trainerRouter from './trainer/trainer.router';
import classRouter from './class/class.router';

function routers(app: Application) {
  app.use(express.json());
  app.use('/trainer', trainerRouter);
  app.use('/class', classRouter);
}

export default routers;
