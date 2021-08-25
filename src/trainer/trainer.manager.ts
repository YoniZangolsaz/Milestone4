/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import trainerInterface from './trainer.interface';
import * as trainerRepository from './trainer.repository';
import { getClassByClassID } from '../class/class.manager';

export const addTrainer = (dacument: trainerInterface) => {
  try {
    trainerRepository.addTrainer(dacument);
    return 'added new trainer successfully';
  } catch (error) {
    return error.toString();
  }
};

export const getAllTrainer = () => {
  try {
    return trainerRepository.getAllTrainer();
  } catch (error) {
    return error.toString();
  }
};

export const getTrainerByUserID = (userID: string) => {
  try {
    return trainerRepository.getTrainerByUserID(userID);
  } catch (error) {
    return error.toString();
  }
};

export const deleteTrainer = (userID: string) => {
  try {
    trainerRepository.deleteTrainer(userID);
    return 'delete trainer successfully';
  } catch (error) {
    return error.toString();
  }
};

export const updateAge = (userID: string, age: number) => {
  try {
    trainerRepository.updateAge(userID, age);
    return 'update age successfully';
  } catch (error) {
    return error.toString();
  }
};

export const updateClassIDs = async (userID: string, classID: string) => {
  try {
    const trainer: any = await getTrainerByUserID(userID);
    const classQuery: any = await getClassByClassID(classID);
    let msg: string = 'message';

    if (trainer.classIDs.includes(classID)) {
      return 'class already in group';
    }

    if (!classQuery) {
      return 'The class not exist';
    }

    if ((await trainer.age) < 20 || trainer.age > 40) {
      return 'The age of trainer must be between 20 - 40';
    }
    for (let i = 0; i < trainer.classIDs.length; i++) {
      const classListInTrainer: any = await getClassByClassID(trainer.classIDs[i]);
      if (
        classQuery.endTime <= classListInTrainer.startTime
        || classQuery.startTime >= classListInTrainer.endTime
      ) {
        trainerRepository.updateClassIDs(userID, classID);
        msg = ` ${classID} update class successfully`;
      } else {
        msg = 'The trainer enrolled in another class during these hours';
      }
    }
    return msg;
  } catch (error) {
    return error.toString();
  }
};

export const deleteClassFromTrainer = async (
  userID: string,
  classID: string,
) => {
  try {
    await trainerRepository.deleteClassFromTrainer(userID, classID);
    return 'remove class successfully';
  } catch (error) {
    return error.toString();
  }
};
