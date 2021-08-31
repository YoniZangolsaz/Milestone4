import trainerInterface from '../trainer/trainer.interface';

interface classInterface {
  classID: string;
  className: string;
  startTime: number;
  endTime: number;
  trainers?: trainerInterface[];
}

export default classInterface;
