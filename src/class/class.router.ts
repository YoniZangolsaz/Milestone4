import express from 'express';
import * as classController from '../class/class.controller';

const router = express.Router();

router.post('/', classController.postClass)
router.get('/', classController.getClass);
// router.delete('/', classController.deleteClass);
// router.put('/name/', classController.putClassName);
// router.get('/getALlClass/', classController.getAllClass);

export default router;