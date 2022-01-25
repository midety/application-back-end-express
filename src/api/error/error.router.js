import express from 'express';
import { validate } from 'express-validation';
import { createErrorDto, deleteErrorDto } from './error.dto';
import { createError, getErrors, deleteError } from './error.service';

const errorRouter = express.Router();

errorRouter.get('', async (_, res) => {
  const errors = await getErrors();

  res.json(errors).send();
});

errorRouter.post('', validate(createErrorDto, {}, {}), async (req, res) => {
  const error = await createError(req.body);

  res.json(error).send();
});

errorRouter.delete(
  '/:id',
  validate(deleteErrorDto, {}, {}),
  async (req, res) => {
    await deleteError(req.params);

    res.sendStatus(200);
  },
);

export { errorRouter };