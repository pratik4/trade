import express from 'express';
import userRoute from './routes/users';
import sellRoute from './routes/sell';

const apiRouter = express.Router();

new userRoute(apiRouter);
new sellRoute(apiRouter);


export default apiRouter;
