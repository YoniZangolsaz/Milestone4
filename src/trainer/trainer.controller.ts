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

  const answer: string = await trainerManager.addTrainer(dacument);
  res.send(answer);
};

// GET http://localhost:3010/trainer/
export const getAllTrainer = async (req: Request, res: Response) => {
  const answer: string = await trainerManager.getAllTrainer();
  res.send(answer);
};

// GET http://localhost:3010/trainer/:trainerId
export const getTrainerByUserID = async (req: Request, res: Response) => {
  const userID: string = req.params.trainerId;

  const answer: string = await trainerManager.getTrainerByUserID(userID);
  res.send(answer);
};

// Delete http://localhost:3010/trainer/:trainerId
export const deleteTrainer = async (req: Request, res: Response) => {
  const userID: string = req.params.trainerId;

  const answer: string = await trainerManager.deleteTrainer(userID);
  res.send(answer);
};

// Patch http://localhost:3010/trainer/age/:trainerId
export const updateAge = async (req: Request, res: Response) => {
  const userID: string = req.params.trainerId;
  const age: number = req.body.age;

  const answer: string = await trainerManager.updateAge(userID, age);
  res.send(answer);
};

// PUT http://localhost:8000/trainer/class/:trainerId
export const putClassInTrainer = async (req: Request, res: Response) => {
  const userID: string = req.params.trainerId;
  const classID: string = req.body.classIDs;

  const answer: string = await trainerManager.updateClassIDs(userID, classID);
  res.send(answer);
};

// PUT http://localhost:8000/trainer/class/:trainerId
export const deleteClassFromTrainer = async (req: Request, res: Response) => {
  const userID: string = req.params.trainerId;
  const classIDs: string = req.body.classIDs;

  const answer: string = await trainerManager.deleteClassFromTrainer(userID, classIDs);
  res.send(answer);
};
