<template>
  <div class="swiper_module_head">
    <nut-noticebar
      direction="vertical"
      :list="[]"
      :speed="10"
      :standTime="2000"
      @click="go"
      color="#38A88D"
      background="rgba(10, 196, 150, 0.1)"
    >
      <p class="custom-item" :data-index="index" v-for="(item, index) in horseLamp1" :key="index">{{
        item
      }}</p>
    </nut-noticebar>
    <img
      class="custom-item-leftIcon"
      src="https://dvs-dev.sunlight-tech.com/wechat/images/village/broadcast.png"
      alt=""
    />
    <img
      class="custom-item-rightIcon"
      src="https://dvs-dev.sunlight-tech.com/wechat/images/village/btn_village_more.png"
      alt=""
    />
  </div>
  <div class="swiper_module_body">
    <itemDataVue v-for="(item, index) in list" :data="item" />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import itemDataVue from './itemData.vue'

  const horseLamp1 = [
    '惊喜红包惊喜红包免费领惊喜红包免费领惊喜红包免费领惊喜红包免费领免费领',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆'
  ]

  const list = ref([
    {
      name: '村庄数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: 55,
      numStyle: {
        color: '#0AC496',
        'font-size': '24px',
        'line-height': '42px'
      }
    },
    {
      name: '党员数',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: 5845,
      numStyle: {
        color: '#3F7FFC',
        'font-size': '24px',
        'line-height': '42px'
      }
    },
    {
      name: '村面积（m²）',
      nameStyle: {
        color: '#606266',
        'font-size': '14px'
      },
      num: 621,
      numStyle: {
        color: '#523FFC',
        'font-size': '24px',
        'line-height': '42px'
      }
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
    .nut-noticebar-vertical {
      width: 79vw !important;
      padding-left: 30px;
      height: 58rpx !important;
      border-radius: 10px;
    }
    .custom-item {
      text-align: left;
      width: 71vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 58rpx !important;
      font-size: 12px;
    }
    .custom-item-leftIcon {
      position: absolute;
      width: 30rpx;
      height: 30rpx;
      top: 18px;
      left: 25px;
    }
    .custom-item-rightIcon {
      position: absolute;
      width: 30rpx;
      height: 30rpx;
      top: 18px;
      right: 25px;
    }
  }
  .swiper_module_body {
    display: flex;
    padding: 0rpx 80rpx;
    justify-content: space-between;
    text-align: center;
  }
</style>
