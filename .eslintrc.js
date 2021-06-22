// module.exports = {
//   root: true,
//   extends: [
//     'prettier-standard',
//   ],
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     sourceType: 'module',
//     ecmaVersion: 6
//   },
//   env: {
//     browser: true
//   },
//   // rules: {
//   //   semi: ['error', 'always']
//   // },
//   globals: {
//     $: true,
//   }
// }

module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    $: true,
  },

  rules: {
    // your rules
  },
};