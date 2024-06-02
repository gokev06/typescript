import express from "express";
import { validatorParams, validator } from '../Middleware/register-validator';
import registerController from '../controllers/register-controller';
const router = express.Router();


router.post('/', validatorParams, validator, registerController);


export default router;