<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="scanCode('text', msg2, true)">扫一扫</nut-button>
      <nut-button type="primary" @click="getSystemInfo">基础版本号</nut-button>
    </view>
    <!-- <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" /> -->
  </view>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  import Taro from '@tarojs/taro'

  export default {
    name: 'Index',
    components: {},
    setup() {
      const state = reactive({
        msg: '欢迎使用 NutUI3.0 开发小程序',
        msg2: '你成功了～',
        type: 'text',
        show: false,
        cover: false
      })

      const scanCode = (type, msg, cover = false) => {
        // let that = this
        wx.scanCode({
          // 扫描API
          success(res) {
            // 扫描成功
            console.log(res, '哈哈哈哈') // 输出回调信息
            // that.setData({
            //   scanCodeMsg: res.result
            // })
            wx.showToast({
              title: '扫码成功',
              icon: 'success',
              duration: 1000
            })
          },
          fail: (res) => {
            // 接口调用失败的回调函数
            wx.showToast({
              title: '扫码失败',
              icon: 'success',
              duration: 1000
            })
          }
        })
      }
      const getSystemInfo = () => {
        wx.getSystemInfo({
          success(res) {
            console.log(res.model)
            console.log(res.pixelRatio)
            console.log(res.windowWidth)
            console.log(res.windowHeight)
            console.log(res.language)
            console.log(res.version)
            console.log(res.platform)
          }
        })
      }
      const back = () => {
        console.log('hhaha')

        Taro.navigateBack({
          delta: 1
        })
      }
      return {
        ...toRefs(state),
        scanCode,
        back,
        getSystemInfo
      }
    }
  }
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
