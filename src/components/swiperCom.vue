<template>
  <swiper
    class="test-h"
    indicator-color="#999"
    indicator-active-color="#333"
    :vertical="false"
    :circular="true"
    :indicator-dots="true"
    :autoplay="true"
  >
    <swiper-item>
      <img
        class="swiper_image"
        src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
        alt=""
      />
    </swiper-item>
    <swiper-item>
      <img
        class="swiper_image"
        src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
        alt=""
      />
    </swiper-item>
    <swiper-item>
      <img
        class="swiper_image"
        src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"
        alt=""
      />
    </swiper-item>
  </swiper>

  <div class="swiper_title">数字乡村，农科杨陵</div>
  <div class="swiper_module">
    <component :is="props.componentName" />
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
    }
  })
  createApp({
    components: {
      districtTopModule: defineAsyncComponent(() => import('./districtTopModule.vue'))
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
    position: absolute;
    top: 400rpx;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 240rpx;
    background-color: #fff;
    border-radius: 10rpx;
    box-shadow: 0 0 10px #ccc;
  }
</style>
