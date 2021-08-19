import classInterface from './class.interface';
import classModel from './class.model';

export const addClass = (dacument: classInterface) => {
    const classA = new classModel(dacument);
    classA.save();
};

export const getClass = async (id: string) => {
    return classModel.findById(id);
};