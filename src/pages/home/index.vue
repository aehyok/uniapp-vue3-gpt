<template>
  <div class="index">
    <nut-cell
      title="跳转到webview页面(redirectTo)"
      is-link
      @click="jumpWebViewRedicrctClick"
    ></nut-cell>
    <nut-cell
      title="跳转到webview页面(navigateTo)"
      is-link
      @click="jumpWebViewPushClick"
    ></nut-cell>
    <nut-cell title="跳转到echart页面" is-link @click="jumpEchartClick"></nut-cell>
    <nut-cell title="Navbar自定义底部" is-link @click="jumpNavbarCustomerClick"></nut-cell>
    <nut-cell title="请求接口地址测试" is-link @click="jumpERequestClick"></nut-cell>
    <nut-cell title="请求微信api获取手机号" is-link @click="jumpClick('phone-number')"></nut-cell>
  </div>
</template>

<script lang="ts" setup>
  import useRouter from '@utils/router'
  import domain from '@utils/domain'
  import request from '@utils/request'
  import Taro from '@tarojs/taro'

  const router = useRouter()
  // const state = reactive({})

  const jumpWebViewRedicrctClick = () => {
    console.log('跳转到webview页面')
    router.location('/pages/webview/index')
  }
  const jumpWebViewPushClick = () => {
    console.log('跳转到webview页面')
    router.push('/pages/webview/index')
  }

  const jumpEchartClick = () => {
    console.log('跳转到echart页面')
    router.push('/echarts/pages/bar-charts/index')
  }

  const jumpNavbarCustomerClick = () => {
    console.log('跳转到Navbar自定义顶部页面')
    router.push('/pages/navbar-customer/index')
  }

  const jumpERequestClick = () => {
    Taro.login({
      success(res: any) {
        const { code } = res
        console.log(code, '--code--')
        request({
          url: '/api/sso/auth/applet/login',
          method: 'get',
          data: { code, mobile: '18620394208' }
        }).then((result: any) => {
          console.log(result, 'request')
        })
      }
    })
  }

  const jumpClick = (page) => {
    router.push(`/pages/${page}/index`)
  }
  console.log(domain, 'domain--')
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #f3f3f3;
  }
</style>
