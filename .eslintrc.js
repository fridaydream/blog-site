module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
  },
  rules: {
    'no-restricted-syntax': 0,
    'import/no-unresolved': 0,
    camelcase: 0,
    '@typescript-eslint/camelcase': 0,
  },
};
