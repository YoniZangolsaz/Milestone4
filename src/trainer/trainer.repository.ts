import trainerInterface from './trainer.interface';
import TrainerModel from './trainer.model';

export const addTrainer = async (dacument: trainerInterface) => {
  const trainer = new TrainerModel(dacument);
  trainer.save();
};

export const getAllTrainer = async () => TrainerModel.find();

export const getTrainerByUserID = async (
  userID: string
): Promise<trainerInterface> => TrainerModel.findOne({ userID });

export const deleteTrainer = async (userID: string) =>
  TrainerModel.remove({ userID });

export const updateAge = async (userID: string, age: number) =>
  TrainerModel.findOneAndUpdate({ userID }, { age });

export const updateClassIDs = async (userID: string, classID: string) =>
  TrainerModel.findOneAndUpdate({ userID }, { $push: { classIDs: classID } });

export const deleteClassFromTrainer = async (
  userID: string,
  classID: string
) => {
  console.log(userID);
  console.log(classID);
  return TrainerModel.findOneAndUpdate(
    { userID },
    { $pull: { classIDs: classID } }
  );
};

export const getTrainerInClass = async (classID: string) =>
  TrainerModel.find({ classIDs: classID }).lean();
