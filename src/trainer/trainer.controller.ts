/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import trainerInterface from './trainer.interface';
import * as trainerManager from './trainer.manager';

// POST http://localhost:3010/trainer/
export const postTrainer = async (req: Request, res: Response) => {
  try {
    const userIDQuery: string = req.body.userID!.toString();
    const fullNameQuery: string = req.body.fullName!.toString();
    const ageQuery: number = parseInt(req.body.age as string);
    const classIDsQuery: string[] = [];

    const dacument: trainerInterface = {
      userID: userIDQuery,
      fullName: fullNameQuery,
      age: ageQuery,
      classIDs: classIDsQuery,
    };

    const answer: trainerInterface = await trainerManager.addTrainer(dacument);
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET http://localhost:3010/trainer/
export const getAllTrainer = async (req: Request, res: Response) => {
  try {
    const answer: trainerInterface = await trainerManager.getAllTrainer();
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET http://localhost:3010/trainer/:trainerId
export const getTrainerByUserID = async (req: Request, res: Response) => {
  try {
    const userID: string = req.params.trainerId;

    const answer: trainerInterface = await trainerManager.getTrainerByUserID(
      userID
    );
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete http://localhost:3010/trainer/:trainerId
export const deleteTrainer = async (req: Request, res: Response) => {
  try {
    const userID: string = req.params.trainerId;

    const answer: trainerInterface = await trainerManager.deleteTrainer(userID);
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Patch http://localhost:3010/trainer/age/:trainerId
export const updateAge = async (req: Request, res: Response) => {
  try {
    const userID: string = req.params.trainerId;
    const age: number = req.body.age;

    const answer: trainerInterface = await trainerManager.updateAge(
      userID,
      age
    );
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT http://localhost:8000/trainer/class/:trainerId
export const putClassInTrainer = async (req: Request, res: Response) => {
  try {
    const userID: string = req.params.trainerId;
    const classID: string = req.body.classIDs;

    const answer: trainerInterface = await trainerManager.updateClassIDs(
      userID,
      classID
    );
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT http://localhost:8000/trainer/class/:trainerId
export const deleteClassFromTrainer = async (req: Request, res: Response) => {
  try {
    const userID: string = req.params.trainerId;
    const classID: string = req.body.classIDs;

    const answer: trainerInterface =
      await trainerManager.deleteClassFromTrainer(userID, classID);
    res.send(answer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
