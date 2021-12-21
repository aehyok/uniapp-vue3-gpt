<template>
  <div class="index">
    <!-- 轮播 与 地区简介-->
    <swiperComVue
      componentName="districtTopModule"
      :swiperImageList="state.swiperImageList"
      :data="villageData"
    />
    <!-- 三个模块 -->
    <div style="padding: 0 20rpx">
      <iconInfoAndJumpVue :item="state.iconInfoAndJumpItem" />
    </div>
    <!-- 生活服务 -->
    <titleSlotVue title="生活服务">
      <leftOneRightTwo :item="state.leftOneRightTwoItem" />
    </titleSlotVue>
    <titleSlotVue title="村情概况">
      <villageMoodProfileVue :data="areaList" />
    </titleSlotVue>
    <view style="font-size: 10px; color: #c8c8c8; margin: 20px 0">以下无内容</view>
  </div>
</template>

<script setup lang="ts">
  import { reactive, onMounted, ref } from 'vue'
  import Taro from '@tarojs/taro'
  import request from '@utils/request'
  import swiperComVue from '../../components/fourMainPage/swiperCom.vue'
  import iconInfoAndJumpVue from '../../components/fourMainPage/iconInfoAndJump.vue'
  import leftOneRightTwo from '../../components/fourMainPage/leftOneRightTwo.vue'
  import titleSlotVue from '../../components/fourMainPage/titleSlot.vue'
  import villageMoodProfileVue from './villageMoodProfile.vue'
  import { getVillageCount, getAreaList } from '@/services/api'
  import { VillageModel } from '@/types/home.d'

  const villageData: VillageModel = ref(null)
  villageData.villageCount = 0
  villageData.populationCount = 0
  villageData.partyCount = 0
  const areaList = ref([])
  const getHomeApi = () => {
    console.log('开始调用业务接口了')
    getVillageCount().then((res) => {
      if (res.code === 200) {
        villageData.value = res.data
        console.log(villageData.value, 'getVillageCount')
      }
    })
    let parameters = { page: 1, limit: 10, level: 5 }

    getAreaList(parameters).then((res) => {
      if (res.code === 200) {
        // villageData.value = res.data
        areaList.value = res.data.docs
        console.log(res.data, 'getAreaList')
      }
    })
  }

  const getRequest = () => {
    try {
      const token = Taro.getStorageSync('token')
      if (token && token.authorization) {
        console.log(token, 'token')
        getHomeApi()
      } else {
        Taro.login({
          success(res) {
            console.log(res.code, 'code')
            request({
              url: `/api/sso/auth/applet/login?code=${res.code}`
            }).then((result) => {
              console.log(result, 'result')
              Taro.setStorage({
                key: 'token',
                data: result.data
              })
              getHomeApi()
            })
          }
        })
      }
    } catch (e) {
      // Do something when catch error
    }
  }

  onMounted(() => {
    getRequest()
  })

  const state = reactive({
    iconInfoAndJumpItem: [
      {
        imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/icon_attestationHome.png',
        title: '认证我的家乡',
        dec: '后稷故里 农科新城 乡村振兴 您我参与',
        jumpUrl: '../../pages/authenticationHometown/index'
      },
      {
        imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/icon-digitalagriculture.png',
        title: '数字农业',
        dec: '现代农业，优质农产品，农科示范园',
        jumpUrl: ''
      },
      {
        imgUrl:
          'https://dvs-dev.sunlight-tech.com/wechat/images/home/icon-informationdisclosure .png',
        title: '信息公开',
        dec: '三务公开，党建宣传，精神文明，便民信息',
        jumpUrl: ''
      }
    ],
    leftOneRightTwoItem: {
      left: {
        backgroundImg: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/bg-product.png',
        imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/product.png',
        title: '优质农产品'
      },
      right: [
        {
          backgroundImg: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/bg-handleguide.png',
          title: '办事指南',
          imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/icon-guidance.png'
        },
        {
          backgroundImg:
            'https://dvs-dev.sunlight-tech.com/wechat/images/home/bg-convenientInfo.png',
          title: '便民查询',
          imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/home/icon-search.png'
        }
      ]
    },
    swiperImageList: [
      'https://dvs-dev.sunlight-tech.com/wechat/images/home/banner.png',
      'https://dvs-dev.sunlight-tech.com/wechat/images/home/banner.png',
      'https://dvs-dev.sunlight-tech.com/wechat/images/home/banner.png'
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
