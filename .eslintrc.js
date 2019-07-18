module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    "describe": "readonly",
    "it": "readonly",
    "before": "readonly",
    "after": "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {

    "linebreak-style": 0,
    "comma-dangle": 0,
    "eslint.autoFixOnSave": true
  }
};
