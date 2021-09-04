import classInterface from './class.interface';
import * as classRepository from './class.repository';
import * as trainerRepository from '../trainer/trainer.repository';
import trainerInterface from '../trainer/trainer.interface';

export const addClass = async (dacument: classInterface) => {
  const newClass = await classRepository.addClass(dacument);
  return newClass;
};

export const getAllClass = async () => {
  const getClass: object = await classRepository.getAllClass();
  return getClass;
};

export const getClassByClassID = async (classID: string) => {
  const getClassByID: classInterface = await classRepository.getClassByClassID(
    classID
  );
  return getClassByID;
};

export const deleteClass = async (classID: string) => {
  const trainers: trainerInterface[] =
    await trainerRepository.getTrainerInClass(classID);

  for (let i = 0; i < trainers.length; i += 1) {
    await trainerRepository.deleteClassFromTrainer(trainers[i].userID, classID);
  }
  const classDelete: classInterface = await classRepository.deleteClass(
    classID
  );
  return classDelete;
};

export const updateClassName = async (classID: string, className: string) => {
  const updateNameClass: classInterface = await classRepository.updateClassName(
    classID,
    className
  );
  return updateNameClass;
};

export const updateStartTime = async (classID: string, startTime: number) => {
  const startTimeUpdate: classInterface = await classRepository.updateStartTime(
    classID,
    startTime
  );
  return startTimeUpdate;
};

export const updateEndTime = async (classID: string, endTime: number) => {
  const endTimeUpdate: classInterface = await classRepository.updateEndTime(
    classID,
    endTime
  );
  return endTimeUpdate;
};

export const getClassWithTrainers = async (classID: string) => {
  const trainers: any = await trainerRepository.getTrainerInClass(classID);
  const classQuery: classInterface = await classRepository.getClassByClassID(
    classID
  );
  classQuery.trainers = trainers;
  return classQuery;
};
