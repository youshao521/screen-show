module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/base'
    //  'eslint:recommended'
  ],
  plugins: ['vue'],
  rules: {
    // "vue/html-self-closing": [1,{
    //   "html": {
    //     "void": "never",
    //     "normal": "always",
    //     "component": "always"
    //   },
    //   "svg": "always",
    //   "math": "always"
    // }],
    indent: [2,2,{ SwitchCase: 1 }], // 两个空格的缩进
    quotes: [2,'single'], // js必须使用单引号
    // 'no-console': [1], // 不允许console语句
    'no-unused-vars': [1], // 声明了变量但是没有使用检测
    'space-unary-ops': [1,{ words: true,nonwords: false }], // 一元运算符的前/后要不要加空格
    'brace-style': [2,'1tbs',{ allowSingleLine: false }], // 大括号风格
    // 'comma-spacing': [2,{ before: false,after: false }], // 逗号后有空格，前没有空格
    'comma-style': [2,'last'], // 逗号跟在结尾
    'key-spacing': [2,{ beforeColon: false,afterColon: true }], // 对象字面量中冒号的前后空格
    'lines-around-comment': [
      // 行前/行后备注
      2,
      {
        beforeBlockComment: false, // 段注释的前后
        beforeLineComment: false, // 行注释的前面
        afterBlockComment: false, // 块注释的后面
        afterLineComment: false, // 行注释的后面
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],
    'max-nested-callbacks': [2,3], // 回调嵌套深度
    'max-params': [2,5], // 函数最多只能有5个参数
    'no-multiple-empty-lines': [2,{ max: 3,maxEOF: 1 }], // 空行最多不能超过2行
    'no-nested-ternary': 2, // 不使用嵌套的三元表达式
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
    'object-curly-spacing': [
      2,
      'always',
      {
        // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
        objectsInObjects: false,
        arraysInObjects: false
      }
    ],
    'arrow-spacing': 2, // =>的前/后括号
    'no-dupe-class-members': 2,
    // 'no-var': 1, // 禁用var，用let和const代替
    'object-shorthand': [1,'always'], // 强制对象字面量缩写语法
    'array-bracket-spacing': [2,'never'], // 是否允许非空数组里面有多余的空格
    'operator-linebreak': [1,'before'], // 换行时运算符在行尾还是行首
    'semi-spacing': [2,{ before: false,after: true }], // 分号前后空格
    'keyword-spacing': ['error'],
    'space-before-blocks': 2, // 不以新行开始的块{前面要不要有空格
    'block-spacing': [2,'always'],
    'space-before-function-paren': [2,'never'], // 函数定义时括号前面要不要有空格
    'space-in-parens': [2,'never'], // 小括号里面要不要有空格
    'spaced-comment': [1,'always',{ exceptions: ['-','*','+'] }], // 注释风格要不要有空格什么的
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    // 'comma-dangle': [1,'always-multiline'],
    'vue/no-parsing-error': [2,{ 'x-invalid-end-tag': false }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
