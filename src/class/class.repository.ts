import classInterface from './class.interface';
import ClassModel from './class.model';

export const addClass = (dacument: classInterface) => {
  const newClass = new ClassModel(dacument);
  newClass.save();
};

export const getAllClass = async () => ClassModel.find();

export const getClassByClassID = async (
  classID: string
): Promise<classInterface> => ClassModel.findOne({ classID }).lean();

export const deleteClass = async (classID: string) =>
  ClassModel.findOneAndDelete({ classID });

export const updateClassName = async (classID: string, className: string) =>
  ClassModel.findOneAndUpdate({ classID }, { className });

export const updateStartTime = async (classID: string, startTime: number) =>
  ClassModel.findOneAndUpdate({ classID }, { startTime });

export const updateEndTime = async (classID: string, endTime: number) =>
  ClassModel.findOneAndUpdate({ classID }, { endTime });
