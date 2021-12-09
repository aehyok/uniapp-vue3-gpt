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
  </div>
</template>

<script setup>
  import useRouter from '@utils/router'

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
