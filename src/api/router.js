import express from 'express';
import { errorRouter } from './error';

const router = express.Router();

router.get('', (_, res) => {
  res.json({ apiVersion: 1 }).send();
});

router.use('/errors', errorRouter);

export { router };