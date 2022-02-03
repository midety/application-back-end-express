import express from 'express';

const groupRouter = express.Router();

groupRouter.post(
  '/applicationGroup',
  validate(createErrorDto, {}, {}),
  async (req, res) => {
    const error = await createError(req.body);

    res.json(error).send();
  },
);

export { router };
