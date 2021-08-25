/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import classInterface from './class.interface';
import * as classRepository from './class.repository';
import * as trainerRepository from '../trainer/trainer.repository';

export const addClass = (dacument: classInterface) => {
  try {
    classRepository.addClass(dacument);
    return 'added new class successfully';
  } catch (error) {
    return error.toString();
  }
};

export const getAllClass = () => {
  try {
    return classRepository.getAllClass();
  } catch (error) {
    return error.toString();
  }
};

export const getClassByClassID = (classID: string) => {
  try {
    return classRepository.getClassByClassID(classID);
  } catch (error) {
    return error.toString();
  }
};

export const deleteClass = async (classID: string) => {
  try {
    const trainers: any = await trainerRepository.getTrainerInClass(classID);

    for (let i = 0; i < trainers.length; i++) {
      await trainerRepository.deleteClassFromTrainer(trainers[i].userID, classID);
    }
    await classRepository.deleteClass(classID);
    return 'delete class successfully';
  } catch (error) {
    return error.toString();
  }
};

export const updateClassName = (classID: string, className: string) => {
  try {
    classRepository.updateClassName(classID, className);
    return 'update class name successfully';
  } catch (error) {
    return error.toString();
  }
};

export const updateStartTime = (classID: string, startTime: number) => {
  try {
    classRepository.updateStartTime(classID, startTime);
    return 'update start time successfully';
  } catch (error) {
    return error.toString();
  }
};

export const updateEndTime = (classID: string, endTime: number) => {
  try {
    classRepository.updateEndTime(classID, endTime);
    return 'update end time successfully';
  } catch (error) {
    return error.toString();
  }
};

export const getClassWithTrainers = async (classID: string) => {
  try {
    const trainers: any = await trainerRepository.getTrainerInClass(classID);
    const classQuery: any = await classRepository.getClassByClassID(classID);
    classQuery.trainers = trainers;
    return classQuery;
  } catch (error) {
    return error.toString();
  }
};
