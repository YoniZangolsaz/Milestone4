/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-cycle */
import trainerInterface from './trainer.interface';
import * as trainerRepository from './trainer.repository';
import { getClassByClassID } from '../class/class.manager';
import classInterface from '../class/class.interface';

export const addTrainer = async (dacument: trainerInterface) => {
  const addTrainer: any = await trainerRepository.addTrainer(dacument);
  return addTrainer;
};

export const getAllTrainer = async () => {
  const getAllTrainer: any = await trainerRepository.getAllTrainer();
  return getAllTrainer;
};

export const getTrainerByUserID = async (userID: string) => {
  const trainer: trainerInterface = await trainerRepository.getTrainerByUserID(
    userID
  );
  return trainer;
};

export const deleteTrainer = async (userID: string) => {
  const deleteTrainer: trainerInterface = await trainerRepository.deleteTrainer(
    userID
  );
  return deleteTrainer;
};

export const updateAge = async (userID: string, age: number) => {
  const updateAge: trainerInterface = await trainerRepository.updateAge(
    userID,
    age
  );
  return updateAge;
};

export const updateClassIDs = async (userID: string, classID: string) => {
  try {
    const trainer: trainerInterface = await getTrainerByUserID(userID);
    const classQuery: classInterface = await getClassByClassID(classID);
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
      const classListInTrainer: classInterface = await getClassByClassID(
        trainer.classIDs[i]
      );
      if (
        classQuery.endTime <= classListInTrainer.startTime ||
        classQuery.startTime >= classListInTrainer.endTime
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
  classID: string
) => {
  const deleteClassFromTrainer = await trainerRepository.deleteClassFromTrainer(
    userID,
    classID
  );
  return deleteClassFromTrainer;
};
