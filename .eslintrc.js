module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    strict: 'error',
    'no-console': 'off',
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    // don"t require comma in the last line of an object/dictionary declaration
    'comma-dangle': ['error', 'never'],
    // ignore max-len for comments
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true
      }
    ],
    // force space after and before curly braces in object/dict declarations
    'object-curly-spacing': ['error', 'always'],
    // force "===" in comparisons when ambiguous
    eqeqeq: ['error', 'smart'],
    'no-tabs': 'off',
    'require-jsdoc': 'off',
    'new-cap': ['error', { capIsNew: false }],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', { anonymous: 'always' }],
    'no-use-before-define': ['error', 'nofunc']
  }
}
