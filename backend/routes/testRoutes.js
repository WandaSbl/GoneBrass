import express from 'express';
import { createTest, getTests } from '../controllers/testController.js';

const router = express.Router();

router.post('/tests', createTest);
router.get('/tests', getTests);

export default router;
