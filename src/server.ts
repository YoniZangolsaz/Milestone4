import express, { Application } from 'express';
import * as config from './config';
import routers from './router';

const PORT = config.serverPort;
export const app: Application = express();

function server() {
  routers(app);

  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
}

export default server;
