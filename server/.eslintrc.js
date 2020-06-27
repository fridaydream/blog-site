module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['standard', 'plugin:@typescript-eslint/recommended'],
  env: { node: true },
  rules: {
    '@typescript-eslint/no-var-requires': [0],
    '@typescript-eslint/ban-ts-comment': [0],
    'import/no-extraneous-dependencies': [0],
    'no-param-reassign': [0]
  }
}