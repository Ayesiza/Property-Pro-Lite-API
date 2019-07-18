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
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    
    "indent": 0,
    "linebreak-style": 0,
    "comma-dangle": 0,
    "no-restricted-globals": 0,
    "camelcase": 0,
    "eslint.autoFixOnSave": true
} 
};
