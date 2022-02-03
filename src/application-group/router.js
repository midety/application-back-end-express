import express from 'express';
import { ApplicationGroupRouter } from './router';

const router = express.Router();

router.get('', (_, res) => {
  res.json({ apiVersion: 1 }).send();
});

router.use('/', ApplicationGroupRouter);

export { router };
