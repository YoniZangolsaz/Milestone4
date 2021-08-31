import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as config from './config';
import server from './server';

dotenv.config();

export default async function startFunction() {
  mongoose
    .connect(config.mongoDbPath, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    })
    .catch(() => {
      console.log("Coudn't connect to MongoDB....");
      process.exit();
    });

  server();
}
startFunction();
