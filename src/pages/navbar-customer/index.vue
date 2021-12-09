<template>
  <nut-navbar title="订单11详情" @on-click-back="back" :left-show="1"> </nut-navbar>
</template>
<script setup>
  import { reactive } from 'vue'
  import cookies from 'weapp-cookie'
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
