<template>
  <web-view :src="state.url" @error="onError" @load="onLoad"></web-view>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
  import domain from '@/utils/domain'

  const onError = (e: any) => {
    console.log(e, '-----------error error---------------')
  }

  const onLoad = (e: any) => {
    console.log(e, 'load success')
  }
  // 默认添加了url参数
  const state = reactive({
    url: `${domain}/app`
  })
  console.log(state.url)
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
