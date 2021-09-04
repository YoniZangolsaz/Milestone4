import express from 'express';
import * as classController from './class.controller';

const router = express.Router();

router.post('/', classController.postClass);
router.get('/', classController.getAllClass);
router.get('/:classId', classController.getClassByClassID);
router.delete('/:classId', classController.deleteClass);
router.patch('/name/:classId', classController.updateClassName);
router.patch('/starttime/:classId', classController.updateStartTime);
router.patch('/endtime/:classId', classController.updateEndTime);

export default router;
