<template>
  <div class="container">
    <div class="household">
      <img
        :src="
          state.avatarUrl
            ? state.avatarUrl
            : 'https://dvs-dev.sunlight-tech.com/wechat/images/me/default-user.png'
        "
        alt=""
      />
      <!-- <van-button type="primary">切换门牌</van-button> -->
      <div class="name">{{ state.realName }}</div>
      <p class="tags">{{ state.mobile ? '联系电话:' + state.mobile : '暂无联系方式' }}</p>
      <p class="tags">{{ state.address ? '地址:' + state.address : '暂无地址' }}</p>
    </div>
    <nut-cell-group>
      <template v-for="item in dataList">
        <nut-cell title="我代发的农产品" desc="8" is-link>
          <template v-slot:icon>
            <img class="nut-icon" :src="item.url" />
          </template>
        </nut-cell>
      </template>
    </nut-cell-group>
    <nut-cell-group>
      <nut-cell title="设置" is-link></nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  // import swiperComVue  from "../../components/swiperCom.vue"

  interface DataList {
    url: string

    value?: Number
  }

  class UserInfo {
    avatarUrl: string = ''

    realName: string

    mobile?: string

    address?: string
  }

  const state = reactive<UserInfo>({
    avatarUrl: '',
    realName: '田让社'
  })

  const dataList = ref<DataList[]>()
  dataList.value = [
    {
      url: 'https://dvs-dev.sunlight-tech.com/wechat/images/me/publish-product-icon.png',
      value: 8
    },
    {
      url: 'https://dvs-dev.sunlight-tech.com/wechat/images/me/report-event-icon.png',
      value: 9
    },
    {
      url: 'https://dvs-dev.sunlight-tech.com/wechat/images/me/handle-event-icon.png',
      value: 18
    },
    {
      url: 'https://dvs-dev.sunlight-tech.com/wechat/images/me/wechat-message-icon.png',
      value: 28
    }
  ]
</script>
<style lang="scss">
  .container {
    height: 100vh;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding: 0 15px;
    background: #f5f7fa;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 100vw;
      height: 45vw;
      background: url('https://dvs-dev.sunlight-tech.com/wechat/images/me/background_top.png')
        no-repeat;
      background-size: 100% 100%;
      z-index: 1;
    }
  }
  .nut-cell {
    margin: 1rpx 0;
    line-height: 35rpx;
  }
  .nut-cell__value {
    margin-right: 10rpx;
  }
  .nut-icon {
    width: 35rpx;
    height: 35rpx;
    margin-right: 25rpx;
  }

  .household {
    background: #fff;
    width: 100%;
    height: 38vw;
    margin-top: 14vw;
    margin-bottom: 2.5vw;
    border-radius: 3px;
    position: relative;
    z-index: 999;
    img {
      position: absolute;
      width: 60px;
      height: 60px;
      top: -40px;
      left: 20px;
    }
    .name {
      padding-top: 40px;
      padding-left: 20px;
      font-size: 22px;
      font-weight: bold;
      color: #333333;
    }
    .tags {
      padding-left: 20px;
      margin: 2vw 0;
    }
  }
</style>
