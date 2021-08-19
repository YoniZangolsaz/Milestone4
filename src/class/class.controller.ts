import express, { Request, Response } from 'express';
import classInterface from './class.interface';
import * as classManager from './class.manager';

const app = express();

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
        endTime: endTimeQuery
    };

    const answer: string = await classManager.addClass(dacument);
    res.send(answer);
};

// GET http://localhost:3010/class/:id
export const getClass = async (req: Request, res: Response) => {
    const id: string = {classID: req.query.id}!.toString();

    const answer: string = await classManager.getClass(id);
    res.send(answer);
};
