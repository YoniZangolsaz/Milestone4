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

export const getClassByClassID = async (
  classID: string
): Promise<classInterface> => {
  return classModel.findOne({ classID }).lean();
};

export const deleteClass = async (classID: string) => {
  return classModel.findOneAndDelete({ classID });
};

export const updateClassName = async (classID: string, className: string) => {
  return classModel.findOneAndUpdate({ classID }, { className: className });
};

export const updateStartTime = async (classID: string, startTime: number) => {
  return classModel.findOneAndUpdate({ classID }, { startTime: startTime });
};

export const updateEndTime = async (classID: string, endTime: number) => {
  return classModel.findOneAndUpdate({ classID }, { endTime: endTime });
};
