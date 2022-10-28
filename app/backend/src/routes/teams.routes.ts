import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const router = Router();

router.get('/', TeamsController.getAll);
router.get('/:id', TeamsController.getById);

export default router;
