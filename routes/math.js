import express from 'express';
import { getAdd, getSub, getPick } from '../controllers/math.js';

const mathRouter = express.Router();

mathRouter.get('/add/:x/:y', getAdd);
mathRouter.get('/sub/:x/:y', getSub);
mathRouter.get('/pick/:x/:y', getPick);


export default mathRouter;