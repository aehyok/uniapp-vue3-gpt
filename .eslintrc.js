module.exports = {
  //  true: 它就会停止在父级目录中寻找
  root: true,
  // 预定义的全局变量，这里是浏览器环境
  env: {
    browser: true,
    es2021: true,
    node: true, // 如果defineProps报错
    "vue/setup-compiler-macros": true,
  },
  // ESTree 只是一个 AST 的某一种规范，ESTree 本质上还是 AST
  // ESLint 默认的 parser ，只转换 js，默认支持 ES5 的语法： 默认采用vue-eslint
  parser: "vue-eslint-parser",
  // 子配置：优先使用typescript-eslint，支持es2021
  parserOptions: { parser: "@typescript-eslint/parser", ecmaVersion: 2021 },
  // 扩展校验风格 合并 eslint 中的 plugins，rules 的
  extends: ["plugin:vue/base", "plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier", "@vue/typescript"],
  // 它的默认 parser 参数会将代码转换为 AST，AST 被 plugin&rules 用来校验和生成错误信息
  plugins: [],
  rules: {
    // 检测未使用的变量，函数和函数的参数
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$",
        varsIgnorePattern: "^h$",
      },
    ],
    // 检测未使用的变量，函数和函数的参数 for typescript
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$",
        varsIgnorePattern: "^h$",
      },
    ],
    // 语句强制分号结尾
    semi: [2, "always"],
    // 如果报错回车结尾错误 window开发环境，但是上传git又是linux
    endOfLine: "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 在rules中添加自定义规则 关闭组件命名规则
    "vue/multi-word-component-names": "off",
    quotes: [1, "double"],
    // allowTemplateLiterals: true,
  },
  // 忽略文件
  ignorePatterns: ["*.css", "*.less", "*.scss", "*.jpg", "*.png", "*.gif", "*.svg", "*vue.d.ts"],
}
