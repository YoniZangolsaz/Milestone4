import express from 'express';
import * as trainerController from './trainer.controller';

const router = express.Router();

router.post('/', trainerController.postTrainer);
router.get('/', trainerController.getAllTrainer);
router.get('/:trainerId', trainerController.getTrainerByUserID);
router.delete('/:trainerId', trainerController.deleteTrainer);
router.patch('/age/:trainerId', trainerController.updateAge);
router.put('/class/:trainerId', trainerController.putClassInTrainer);
router.delete('/class/:trainerId', trainerController.deleteClassFromTrainer);

export default router;
