import { Router } from 'express';
import TokenValidated from '../middlewares/TokenValidated';
import MatchesController from '../controllers/MatchesController';

const router = Router();

router.patch('/:id', MatchesController.update);
router.patch('/:id/finish', MatchesController.finish);
router.post('/', TokenValidated.validate, MatchesController.create);
router.get('/', MatchesController.getAll);

export default router;
