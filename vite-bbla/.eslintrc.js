module.exports = {
  parser:  '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // 这里写覆盖vue文件的规则
        'vue/no-multiple-template-root': 'off',
      },
    },
  ],
  rules: {
    // 自己写一些想配置的规则
    // 'vue/max-attributes-per-line': 'off',
    // 'vue/no-v-model-argument': 'off',
    // 'vue/singleline-html-element-content-newline': 'off',
    'vue/no-multiple-template-root': 'off',
    semi: 'off',
  },
}