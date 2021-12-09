<template>
  <div class="index">
    <nut-cell title="跳转到webview页面" is-link @click="jumpWebViewClick"></nut-cell>
  </div>
</template>

<script setup>
  import useRouter from '@utils/router'

  const router = useRouter()
  // const state = reactive({})

  const jumpWebViewClick = () => {
    console.log('跳转到webview页面')
    router.location('/pages/webview/index')
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
