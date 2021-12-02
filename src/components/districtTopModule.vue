<template>
  <div class="swiper_module_head">
    <span>杨凌区</span>
    <span>10-12多云</span>
  </div>
  <div class="swiper_module_body">
    <itemDataVue v-for="(item, index) in list" :data="item" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import itemDataVue from './itemData.vue'

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
