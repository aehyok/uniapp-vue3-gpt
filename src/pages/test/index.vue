<template>
  <web-view src="https://dvs-dev.sunlight-tech.com/wechat" @message="handleMessage" />
</template>

<script setup>
  const handleMessage = () => {
    console.log('hanleMessage')
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
