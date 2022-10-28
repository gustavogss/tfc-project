import { Router } from 'express';
import LoginValidate from '../middlewares/LoginValidate';
import LoginController from '../controllers/LoginController';

const router = Router();

router.post('/', LoginValidate.login, LoginController.login);
router.get('/validate', LoginController.validate);

export default router;
