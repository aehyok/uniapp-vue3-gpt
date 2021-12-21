import { createApp } from 'vue'
// import { Button, Toast ,Divider  } from '@nutui/nutui-taro';
import {
  Button,
  Toast,
  Divider,
  InfiniteLoading,
  Icon,
  NoticeBar,
  Cell,
  CellGroup,
  Input,
  Form,
  FormItem,
  Navbar
} from '@nutui/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'

import './app.scss'
// import './router/index.ts'
import districtTopModule from './components/fourMainPage/districtTopModule.vue'
import villageTopModule from './components/fourMainPage/villageTopModule.vue'
import familyTopModule from './components/fourMainPage/familyTopModule.vue'

const App = createApp({
  onShow(options) {
    console.log('onShow-0------')
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.component('districtTopModule', districtTopModule)
  .component('villageTopModule', villageTopModule)
  .component('familyTopModule', familyTopModule)
  .use(Button)
  .use(Toast)
  .use(Divider)
  .use(InfiniteLoading)
  .use(Icon)
  .use(NoticeBar)
  .use(Cell)
  .use(CellGroup)
  .use(Input)
  .use(Form)
  .use(FormItem)
  .use(Navbar)
export default App
