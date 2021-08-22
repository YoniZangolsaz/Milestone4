/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose';
import * as config from './config';
import server from './server';

startFunction();

export async function startFunction() {
  mongoose.connect(config.mongoDbPath, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch((err) => {
      console.log("Coudn't connect to MongoDB....");
      process.exit();
    });

  server();
}
