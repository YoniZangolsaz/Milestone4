/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import express, { Request, Response } from 'express';
import classInterface, { id, name } from './class.interface';
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
export const getClassByclassID = async (req: Request, res: Response) => {
  const classID = req.params.classId;

  const answer = await classManager.getClassByclassID(classID);
  res.send(answer);
};

// GET http://localhost:3010/class/
export const getAllClass = async (req: Request, res: Response) => {
  const classID = req.params.id;

  const answer = await classManager.getAllClass();
  res.send(answer);
};

// Delete http://localhost:3010/class/:classId
export const deleteClass = async (req: Request, res: Response) => {
  const classID = req.params.classId;

  const answer = await classManager.deleteClass(classID);
  res.send(answer);
};

// Patch http://localhost:3010/class/name/:classId
export const putClassName = async (req: Request, res: Response) => {
  const classID = req.params.classId;
  const className = req.body.className;

  const answer = await classManager.updateClassName(classID, className);
  res.send(answer);
};
