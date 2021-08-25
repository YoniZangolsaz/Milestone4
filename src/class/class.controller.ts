/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express, { Request, Response } from 'express';
import classInterface from './class.interface';
import * as classManager from './class.manager';

// POST http://localhost:3010/class/
export const postClass = async (req: Request, res: Response) => {
  const classIDQuery: string = req.body.classID!.toString();
  const classNameQuery: string = req.body.className!.toString();
  const startTimeQuery: number = parseInt(req.body.startTime as string);
  const endTimeQuery: number = parseInt(req.body.endTime as string);

  const dacument: classInterface = {
    classID: classIDQuery,
    className: classNameQuery,
    startTime: startTimeQuery,
    endTime: endTimeQuery,
  };

  const answer: string = await classManager.addClass(dacument);
  res.send(answer);
};

// GET http://localhost:3010/class/:classId
export const getClassByClassID = async (req: Request, res: Response) => {
  const classID: string = req.params.classId;

  const answer: string = await classManager.getClassWithTrainers(classID);
  res.send(answer);
};

// GET http://localhost:3010/class/
export const getAllClass = async (req: Request, res: Response) => {
  const answer: string = await classManager.getAllClass();
  res.send(answer);
};

// Delete http://localhost:3010/class/:classId
export const deleteClass = async (req: Request, res: Response) => {
  const classID: string = req.params.classId;

  const answer: string = await classManager.deleteClass(classID);
  res.send(answer);
};

// Patch http://localhost:3010/class/name/:classId
export const updateClassName = async (req: Request, res: Response) => {
  const classID: string = req.params.classId;
  const className: string = req.body.className;

  const answer: string = await classManager.updateClassName(classID, className);
  res.send(answer);
};

// Patch http://localhost:3010/class/starttime/:classId
export const updateStartTime = async (req: Request, res: Response) => {
  const classID: string = req.params.classId;
  const startTime: number = req.body.startTime;

  const answer: string = await classManager.updateStartTime(classID, startTime);
  res.send(answer);
};

// Patch http://localhost:3010/class/endtime/:classId
export const updateEndTime = async (req: Request, res: Response) => {
  const classID: string = req.params.classId;
  const endTime: number = req.body.endTime;

  const answer: string = await classManager.updateEndTime(classID, endTime);
  res.send(answer);
};
