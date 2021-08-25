import trainerInterface from '../trainer/trainer.interface';
/* eslint-disable @typescript-eslint/naming-convention */
interface classInterface {
  classID: string;
  className: string;
  startTime: number;
  endTime: number;
  trainers?: trainerInterface[];
}

export default classInterface;
