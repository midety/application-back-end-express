module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    babelOptions: {
      configFile: "./.babelrc.json",
    },
  },
  extends: ['eslint:recommended', 'prettier:recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
    es6: true,
  }
};
  