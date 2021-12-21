<template>
  <swiper
    class="test-h"
    indicator-color="#999"
    indicator-active-color="#333"
    :vertical="false"
    :circular="true"
    :indicator-dots="false"
    :autoplay="true"
  >
    <swiper-item v-for="(item, index) in props.swiperImageList" :key="index">
      <img class="swiper_image" :src="item" alt="" />
    </swiper-item>
  </swiper>

  <!-- <div class="swiper_title">数字乡村，农科杨陵</div> :style="{top:'450rpx'}" -->
  <div class="swiper_module">
    <component :is="props.componentName" :data="data" />
  </div>
  <!-- 11111aaaa -->
</template>
<script setup>
  import { ref, defineAsyncComponent, createApp } from 'vue'
  // import districtModuleVue from './districtModule.vue';
  const props = defineProps({
    componentName: {
      type: String,
      default: ''
    },
    swiperImageList: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    }
  })
  createApp({
    components: {
      // districtTopModule: defineAsyncComponent(() => import('./districtTopModule.vue'))
    }
  })
  // console.log(props.componentName,"优雅");
  // export default {

  // }
</script>
<style lang="scss">
  .swiper_image {
    width: 100%;
    height: 100%;
  }
  .swiper_title {
    position: absolute;
    top: 180rpx;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40rpx;
    color: red;
  }
  .swiper_module {
    position: relative;
    top: -30rpx;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 95%;
    // height: 250rpx;
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: 0 0 10px #ccc;
    padding: 0px 0 25px;
  }
</style>
