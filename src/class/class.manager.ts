/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import classInterface, { id } from './class.interface';
import * as classRepository from './class.repository';
// import * as classManager from '../trainer/trainer.manager';

export const addClass = (dacument: classInterface) => {
  try {
    classRepository.addClass(dacument);
    return 'added new class successfully';
  } catch (error) {
    return error;
  }
};

export const getAllClass = () => {
  try {
    return classRepository.getAllClass();
  } catch (error) {
    return error;
  }
};

export const getClassByclassID = (classID: string) => {
  try {
    return classRepository.getClassByclassID(classID);
  } catch (error) {
    return error;
  }
};

export const deleteClass = (classID: string) => {
  try {
    classRepository.deleteClass(classID);
    return 'delete class successfully';
  } catch (error) {
    return error;
  }
};

export const updateClassName = (classID: string, className: string) => {
  try {
    classRepository.updateClassName(classID, className);
    return 'update class name successfully';
  } catch (error) {
    return error;
  }
};
