import * as dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.SERVER_PORT || 3010;
export const localHost = process.env.LOCAL_HOST || 27017;
export const APP = process.env.APP || 'app';

export const dbName = 'trainerAndClass';

// const MONGOIP = process.env.MONGOIP;
// const MONGOPORT = process.env.MONGOPORT;
export const mongoDbPath = `mongodb://mongo:${localHost}/${dbName}`;

export const trainerCollectionName = 'trainer';
export const classCollectionName = 'class';
console.log(mongoDbPath);
console.log(serverPort);
