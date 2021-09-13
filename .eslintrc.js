module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/base'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': 1,
    'vue/html-comment-content-spacing': 1,
    'vue/html-comment-indent': 1,
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx', 'vue', 'tsx']
      }
    ],
    'vue/no-boolean-default': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true
      }
    ],
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['vue', 'vue-router']
      }
    ],
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-restricted-block': [
      'error',
      {
        element: 'example',
        message: 'Do not use <example> block in this project.'
      },
      {
        element: '/regex/',
        message: 'Do not use blocks that include `regex` in their name.'
      }
    ],
    'vue/v-on-function-call': [
      'error',
      'never',
      {
        ignoreIncludesComment: false
      }
    ],
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/padding-line-between-blocks': 'error'
  }
}