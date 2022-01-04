module.exports = {
  env: {
    // browser와 node환경 모두에서 코드 검사 진행
    browser: true,
    node: true,
  },
  extends: [
    // vue 코드 규칙
    //'plugin:vue/vue3-essential', // lv1
    "plugin:vue/vue3-strongly-recommended", // lv2
    //'plugin:vue/vue3-recommended', // lv3
    // js 코드 규칙
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "vue/html-self-closing-bracket-newline": ["error", {
      "singleline": 'never',
      'multiline': 'never'
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always'
    }]
  },
};
