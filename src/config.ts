import * as dotenv from 'dotenv';

export const serverPort = 3010;
export const localHost = 27017;
export const dbName = 'trainerAndClass';
dotenv.config();

const { MONGOIP } = process.env;
const { MONGOPORT } = process.env;
export const mongoDbPath = `mongodb://${MONGOIP}:${MONGOPORT}/${dbName}`;

export const trainerCollectionName = 'trainer';
export const classCollectionName = 'class';

console.log(mongoDbPath);
