/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import classInterface from './class.interface';
import classModel from './class.model';

export const addClass = (dacument: classInterface) => {
  const classA = new classModel(dacument);
  classA.save();
};

export const getAllClass = async () => {
  return classModel.find();
};

export const getClassByclassID = async (classID: string): Promise<classInterface> => {
  return classModel.findOne({ classID });
};

export const deleteClass = async (classID: string) => {
  return classModel.remove({ classID });
};

export const updateClassName = async (classID: string, className: string) => {
  return classModel.findOneAndUpdate({ classID }, { className: className });
};
