import { Joi } from 'express-validation';

export const createErrorDto = {
  body: Joi.object({
    name: Joi.string().required(),
    solution: Joi.string().required(),
  }),
};

export const deleteErrorDto = {
  params: Joi.object({
    id: Joi.string().guid(),
  }),
};