module.exports = {
  // 超过最大值换行
  printWidth: 120,
  // 缩进2
  tabWidth: 2,
  // ??? == useTabs
  tabs: false,
  // 末尾添加分号
  semi: true,
  // 使用单引号
  // singleQuote: true,
  // 给对象里的属性名是否要加上引号，默认为as-needed，即根据需要决定，如果不加引号会报错则加，否则不加
  quoteProps: "as-needed",
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数参数只有一个时是否要有小括号 avoid: 省略括号
  arrowParens: "always",
  // 结尾是 \n \r \n\r auto
  endOfLine: "auto",
};