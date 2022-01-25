import * as ErrorEntity from './error.dao';

export const getErrors = (args) => {
  return ErrorEntity.findAll(args);
};

export const createError = (args) => {
  return ErrorEntity.create(args);
};

export const deleteError = (args) => {
  return ErrorEntity.del(args);
};