<template>
  <div class="index">
    <!-- 轮播图 -->
    <swiperComVue componentName="villageTopModule" />
    <div style="margin-top: 250rpx; padding: 0 30rpx">
      <leftOneRightTwo />
    </div>
    <titleSlotVue title="近期村民需填报信息" to="/aa">
      <iconInfoAndJumpVue />
    </titleSlotVue>
    <titleSlotVue title="最新动态" to="/aa">
      <recentNewsVue />
    </titleSlotVue>
    <titleSlotVue title="三务公开" to="/aa">
      <threeServicePublicVue />
    </titleSlotVue>
    <titleSlotVue title="农产品销售" to="/aa">
      <agriculturalMarketingSalesVue />
    </titleSlotVue>
    <nut-divider>以下无内容</nut-divider>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import swiperComVue from '../../components/swiperCom.vue'
  import leftOneRightTwo from '../../components/leftOneRightTwo.vue'
  import titleSlotVue from '../../components/titleSlot.vue'
  import recentNewsVue from './recentNews.vue'
  import iconInfoAndJumpVue from '../../components/iconInfoAndJump.vue'
  import threeServicePublicVue from './threeServicePublic.vue'
  import agriculturalMarketingSalesVue from './agriculturalMarketingSales.vue'

  const state = reactive({
    msg: '欢迎使用 NutUI3.0 开发小程序',
    msg2: '你成功了～',
    type: 'text',
    show: false,
    cover: false
  })
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
