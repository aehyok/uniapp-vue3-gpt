<template>
  <web-view :src="state.url"></web-view>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import { getAccountInfoSync } from '@tarojs/taro'
  import { useDidShow } from '@/hooks/life'

  const dictionary: { [key: string]: string } = {
    develop: 'https://dvs-dev.sunlight-tech.com/wechat',
    trial: 'https://dvs-sit1.sunlight-tech.com/wechat',
    release: 'https://dvs-yangling.sunlight-tech.com/wechat'
  }

  useDidShow(() => {
    console.log('----sueDidShow----')
  })
  let random = Math.round(Math.random() * 100)
  // 默认添加了url参数
  const state = reactive({
    url: `https://dvs-dev.sunlight-tech.com/wechat?random=${random}&test=11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122`
  })

  const env = getAccountInfoSync()
  console.log(env, '当前小程序的运行环境', dictionary[env.miniProgram.envVersion])
  state.url = dictionary[env.miniProgram.envVersion]
  console.log(state.url, 'state.url')
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
