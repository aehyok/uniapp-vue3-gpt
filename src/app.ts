import { createApp } from 'vue'
import { createUI } from 'taro-ui-vue3'
// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'
import './app.scss'

const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

// 引用全部组件
const taroUIv3 = createUI()
App.use(taroUIv3)

export default App
