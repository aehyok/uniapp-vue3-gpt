<template>
  <web-view src="https://dvs-dev.sunlight-tech.com/wechat"></web-view>
</template>

<script setup>
  import { reactive, onMounted } from 'vue'
  import Taro, { cloud } from '@tarojs/taro'

  const db = cloud.database()
  const clickPhoneNumber = () => {
    console.log('clickPhoneNumber')
  }
  const getPhoneNumber = (e) => {
    console.log('ee', 'bb')
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }

  onMounted(() => {
    console.log('ssss--onMounted')
    db.collection('dvs')
      .doc('0448022461a975c2002510b37bff7757')
      .get()
      .then((res) => {
        console.log(res, 'ssssss')
      })

    // db.collection('dvs')
    //   .doc('0448022461a975c2002510b37bff7757')
    //   .get({
    //     success(res) {
    //       // res.data 包含该记录的数据
    //       console.log(res.data, '--ss--')
    //     }
    //   })
    Taro.checkSession({
      success() {
        // session_key 未过期，并且在本生命周期一直有效
        console.log('还有效，无需获取')
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        console.log('已失效，要重新登录')
        Taro.login({
          success(res) {
            if (res.code) {
              // 发起网络请求
              // Taro.request({
              //   // url: 'https://test.com/onLogin',
              //   // data: {
              //   //   code: res.code
              //   // }
              // })
            } else {
              console.log(`登录失败！${res.errMsg}`)
            }
          }
        })
      }
    })
  })
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
