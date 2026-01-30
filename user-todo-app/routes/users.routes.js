import express from 'express';
import { signupUser, deleteUser } from '../controllers/users.controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.delete('/delete/:userId', deleteUser);

export default router;
