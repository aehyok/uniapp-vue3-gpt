import { createApp } from 'vue'
// import { Button, Toast ,Divider  } from '@nutui/nutui-taro';
import { cloud } from '@tarojs/taro'
import { Button, Toast, Divider, InfiniteLoading, Icon, NoticeBar, Navbar } from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
import './app.scss'
import 'weapp-cookie'
import districtTopModule from './components/districtTopModule.vue'
import villageTopModule from './components/villageTopModule.vue'

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

// 设置环境id
// cloud.init({
//   env: 'aehyok-3gpo5005aa878045'
// })
App.component('districtTopModule', districtTopModule)
  .component('villageTopModule', villageTopModule)
  .use(Button)
  .use(Toast)
  .use(Divider)
  .use(InfiniteLoading)
  .use(Icon)
  .use(NoticeBar)
  .use(Navbar)

export default App
