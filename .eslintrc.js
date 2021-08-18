module.exports = {
  root: true,
  env : {
    browser: true,
    node   : true,
  },
  parserOptions: { parser: 'babel-eslint' },
  extends      : '@privyid/eslint-config-js',
  // extends: [
  //   'adenvt',
  // '@nuxtjs',
  // 'plugin:nuxt/recommended'
  // ],
  plugins      : [],
  // add your custom rules here
  rules        : { 'unicorn/no-null': 'off' },
  overrides    : [
    {
      files: ['pages/**/*.vue', 'layouts/**/*.vue'],
      rules: { 'unicorn/filename-case': ['error', { case: 'kebabCase' }] },
    },
  ],
}
