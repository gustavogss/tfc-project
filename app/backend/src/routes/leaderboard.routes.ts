import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();

router.get('/', LeaderboardController.getAll);
router.get('/home', LeaderboardController.getAllHome);
router.get('/away', LeaderboardController.getAllAway);

export default router;
