<template>
  <div class="halfBottom">
    <nut-cell-group title="">
      <nut-cell
        v-for="(item, index) in topList"
        :key="index"
        :title="item.title"
        is-link
        :desc="item.desc"
      >
        <template v-slot:icon>
          <img class="nut-icon" :src="item.imgUrl" />
        </template>
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group>
      <nut-cell
        v-for="(item, index) in bottomList"
        :key="index"
        :title="item.title"
        is-link
        :desc="item.desc"
      >
        <template v-slot:icon>
          <img class="nut-icon" :src="item.imgUrl" />
        </template>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const topList = ref([
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/mine/icon-dailyattendance.png',
      title: '每日签到',
      desc: '',
      jupmUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/mine/icon-Householdsize.png',
      title: '家庭户码',
      desc: '12332431245123',
      jupmUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/mine/icon-Familyofintegral.png',
      title: '家庭积分',
      desc: '12332431245123',
      jupmUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/mine/icon-Familybreakdown.png',
      title: '家庭积分明细',
      desc: '12332431245123',
      jupmUrl: ''
    }
  ])
  const bottomList = ref([
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/mine/icon-checkoutProduct.png',
      title: '我发布的农产品',
      desc: '12332431245123',
      jupmUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/mine/icon-Reporttheincident.png',
      title: '我发布的随手拍',
      desc: '12332431245123',
      jupmUrl: ''
    }
  ])
</script>
<style lang="scss">
  .halfBottom {
    margin-top: 35px;
    padding: 0 20rpx;
    .nut-icon {
      padding: 0 5px;
    }
  }
</style>
