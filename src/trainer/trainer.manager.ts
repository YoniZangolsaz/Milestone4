import trainerInterface from './trainer.interface';
import * as trainerRepository from './trainer.repository';
import { getClassByClassID } from '../class/class.manager';
import classInterface from '../class/class.interface';

export const addTrainer = async (dacument: trainerInterface) => {
  const newTrainer = await trainerRepository.addTrainer(dacument);
  return newTrainer;
};

export const getAllTrainer = async () => {
  const getTrainer: object = await trainerRepository.getAllTrainer();
  return getTrainer;
};

export const getTrainerByUserID = async (userID: string) => {
  const trainer: trainerInterface = await trainerRepository.getTrainerByUserID(
    userID
  );
  return trainer;
};

export const deleteTrainer = async (userID: string) => {
  const trainerDelet: trainerInterface = await trainerRepository.deleteTrainer(
    userID
  );
  return trainerDelet;
};

export const updateAge = async (userID: string, age: number) => {
  const ageUpdate: trainerInterface = await trainerRepository.updateAge(
    userID,
    age
  );
  return ageUpdate;
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
    for (let i = 0; i < trainer.classIDs.length; i += 1) {
      const classListInTrainer: classInterface = await getClassByClassID(
        trainer.classIDs[i]
      );
      if (
        classQuery.endTime <= classListInTrainer.startTime ||
        classQuery.startTime >= classListInTrainer.endTime
      ) {
        await trainerRepository.updateClassIDs(userID, classID);
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
  const deleteClassFromTheTrainer: trainerInterface =
    await trainerRepository.deleteClassFromTrainer(userID, classID);
  return deleteClassFromTheTrainer;
};
