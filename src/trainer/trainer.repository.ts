/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable import/prefer-default-export */
/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import trainerInterface from './trainer.interface';
import trainerModel from './trainer.model';

export const addTrainer = (dacument: trainerInterface) => {
  const trainer = new trainerModel(dacument);
  trainer.save();
};

export const getAllTrainer = async () => {
  return trainerModel.find();
};

export const getTrainerByUserID = async (
  userID: string
): Promise<trainerInterface> => {
  return trainerModel.findOne({ userID });
};

export const deleteTrainer = async (userID: string) => {
  return trainerModel.remove({ userID });
};

export const updateAge = async (userID: string, age: number) => {
  return trainerModel.findOneAndUpdate({ userID }, { age: age });
};

export const updateClassIDs = async (userID: string, classID: string) => {
  console.log(classID);
  return await trainerModel.findOneAndUpdate(
    { userID },
    { $push: { classIDs: classID } }
  );
};

export const deleteClassFromTrainer = (userID: string, classID: string) => {
  return trainerModel.findOneAndUpdate(
    { userID },
    { $pull: { classIDs: classID } }
  );
};

export const getTrainerInClass = async (classID: string) => {
  return await trainerModel.find({ classIDs: classID }).lean();
};
