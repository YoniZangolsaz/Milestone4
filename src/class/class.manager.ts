import classInterface from './class.interface';
import * as classRepository from './class.repository';
// import * as trainerManager from '../trainer/trainer.manager';

export const addClass = (dacument: classInterface) => {
    try {
        classRepository.addClass(dacument);
        return 'added new class successfully';
    } 
    catch (error) {
        return error;
    }
};

export const getClass = (id: string) => {
    try {
        return classRepository.getClass(id);
    } 
    catch (error) {
        return error;
    }
};