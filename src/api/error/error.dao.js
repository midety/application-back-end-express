import knex from 'src/config/database';

const TABLE_NAME = 'errors';

export const findAll = (filterCriteria) => {
  let query = knex.select().from(TABLE_NAME);

  if (filterCriteria) {
    query = query.where(filterCriteria);
  }

  return query;
};

export const create = (entity) => {
  return knex
    .insert(entity)
    .into(TABLE_NAME)
    .returning(['id', 'name', 'solution'])
    .then((res) => res[0]);
};

export const del = (filterCriteria) => {
  let query = knex.del().from(TABLE_NAME);

  if (filterCriteria) {
    query = query.where(filterCriteria);
  }

  return query;
};