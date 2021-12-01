<template>
  <div class="swiper_module_head">
    <nut-noticebar
      direction="vertical"
      :list="horseLamp1"
      :speed="10"
      :standTime="1000"
      @click="go"
      :closeMode="true"
    ></nut-noticebar>
  </div>
  <div class="swiper_module_body">
    <itemDataVue v-for="(item, index) in list" :data="item" />
  </div>
</template>
<script setup>
  import itemDataVue from './itemData.vue'
  import { ref } from 'vue'
  const horseLamp1 = ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']

  const list = ref([
    {
      name: '村庄数',
      num: 3654120
    },
    {
      name: '村民数',
      num: 55
    },
    {
      name: '党员树',
      num: 651421
    }
  ])
  const go = () => {
    console.log('go哪里')
  }
</script>
<style lang="scss">
  .swiper_module_head {
    padding: 20rpx 30rpx;
    display: flex;
    justify-content: space-between;
  }
  .swiper_module_body {
    display: flex;
    padding: 0rpx 30rpx;
    justify-content: space-between;
    text-align: center;
  }
</style>
