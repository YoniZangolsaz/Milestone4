import express from 'express';
import * as classController from './class.controller';

const router = express.Router();

router.post('/', classController.postClass);
router.get('/', classController.getAllClass);
router.get('/:classId', classController.getClassByclassID);
router.delete('/:classId', classController.deleteClass);
router.patch('/name/:classId', classController.putClassName);
// router.get('/getALlClass/', classController.getAllClass);

export default router;
