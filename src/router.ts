/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express from 'express';
import { Application } from 'express';

import trainerRouter from './trainer/trainer.router';
import classRouter from './class/class.router';

function routers(app: Application) {
  app.use(express.json());
  app.use('/trainer', trainerRouter);
  app.use('/class', classRouter);
}

export default routers;
