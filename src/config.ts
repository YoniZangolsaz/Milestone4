import * as dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.SERVERPORT;
export const localHost = process.env.LOCALHOST;
export const dbName = 'trainerAndClass';

const { MONGOIP } = process.env;
const { MONGOPORT } = process.env;
export const mongoDbPath = `mongodb://${MONGOIP}:${MONGOPORT}/${dbName}`;

export const trainerCollectionName = 'trainer';
export const classCollectionName = 'class';
