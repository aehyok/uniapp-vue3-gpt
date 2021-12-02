<template>
  <div class="title" @click="handleClick">test</div>
  <hello></hello>
</template>

<script setup>
  import { reactive } from 'vue'
  import hello from '../../components/hello/index.vue'

  const state = reactive({
    msg: '欢迎使用 NutUI3.0 开发小程序',
    msg2: '你成功了～',
    type: 'text',
    show: false,
    cover: false
  })

  // 暂时未定义test--test
  const handleClick = () => {
    state.show = true
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
