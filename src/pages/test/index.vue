<template>
  <nut-navbar title="订单11详情" @on-click-back="back" :left-show="1"> </nut-navbar>
  <web-view @message="handleGetMessage" :src="state.url"></web-view>
</template>
<script setup>
  import { reactive } from 'vue'

  // 获取 cookie
  console.log('11111111111')
  const handleGetMessage = (e) => {
    console.log(e, '公众号传递的数据')
  }
  const leftShow = true
  const back = () => {
    console.log('back')
    // const url = ref('https://dvs-dev.sunlight-tech.com/wechat')
  }

  const state = reactive({
    url: 'https://dvs-dev.sunlight-tech.com/wechat?test=11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122'
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
