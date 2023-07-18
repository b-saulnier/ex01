import express from 'express';
import { getAbout } from '../controllers/webNavigation.js';

const webNavigationRouter = express.Router();

webNavigationRouter.get('/about', getAbout);


export default webNavigationRouter;