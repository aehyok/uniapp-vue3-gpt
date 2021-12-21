<template>
  <div class="index">
    <!-- 轮播图 -->
    <swiperComVue componentName="villageTopModule" :swiperImageList="state.swiperImageList" />
    <div style="padding: 0 20rpx">
      <leftOneRightTwo :item="state.leftOneRightTwoItem" />
    </div>
    <titleSlotVue title="近期村民需填报信息" to="/aa">
      <iconInfoAndJumpVue :item="state.iconInfoAndJumpItem" />
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
    <view style="font-size: 10px; color: #c8c8c8; margin: 20px 0">以下无内容</view>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import swiperComVue from '../../components/fourMainPage/swiperCom.vue'
  import leftOneRightTwo from '../../components/fourMainPage/leftOneRightTwo.vue'
  import titleSlotVue from '../../components/fourMainPage/titleSlot.vue'
  import recentNewsVue from './recentNews.vue'
  import iconInfoAndJumpVue from '../../components/fourMainPage/iconInfoAndJump.vue'
  import threeServicePublicVue from './threeServicePublic.vue'
  import agriculturalMarketingSalesVue from './agriculturalMarketingSales.vue'

  const state = reactive({
    iconInfoAndJumpItem: [
      {
        imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/fill_defult.png',
        title: '新冠疫苗接种情撒大苏打实打实况登记登记.....',
        dec: '村民新冠疫苗接种登记啊实打实大大苏打情大苏打情苏打情况记情况记情况记.....',
        jumpUrl: ''
      },
      {
        imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/fill_defult.png',
        title: '三胎生育计划登记',
        dec: '计划三胎生育的登记领取补贴',
        jumpUrl: ''
      }
    ],
    leftOneRightTwoItem: {
      left: {
        backgroundImg:
          'https://dvs-dev.sunlight-tech.com/wechat/images/village/backgroundMapverview.png',
        title: '村情概况'
      },
      right: [
        {
          backgroundImg: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/snapshotbg.png',
          title: '随手拍',
          imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/snapshot.png'
        },
        {
          backgroundImg:
            'https://dvs-dev.sunlight-tech.com/wechat/images/village/releaseAgriculturalProductsbg.png',
          title: '发布农产品',
          imgUrl:
            'https://dvs-dev.sunlight-tech.com/wechat/images/village/releaseAgriculturalProducts.png'
        }
      ]
    },
    swiperImageList: [
      'https://dvs-dev.sunlight-tech.com/wechat/images/village/villageTopBanner.png',
      'https://dvs-dev.sunlight-tech.com/wechat/images/village/villageTopBanner.png',
      'https://dvs-dev.sunlight-tech.com/wechat/images/village/villageTopBanner.png'
    ]
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
