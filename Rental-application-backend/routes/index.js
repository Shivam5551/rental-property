import express from 'express';
import userRouter from './user.js';
import propertyRouter from './property.js';


const router = express.Router();


router.use('/user', userRouter);
router.use('/property', propertyRouter);

export default router;