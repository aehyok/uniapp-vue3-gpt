<template>
  <div class="familyInfoModule_content">
    <div class="flex_content">
      <div
        class="flex_content_box"
        v-for="(item, index) in list"
        :key="index"
        @click="jumpUrl(item.jumpUrl)"
      >
        <img :src="item.imgUrl" alt="" class="flex_content_img" />
        <div class="flex_content_menber">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import useRouter from '../../utils/router.ts'

  const { push } = useRouter()
  const list = ref([
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/familymember.png',
      title: '家庭成员',
      jumpUrl: '../../pages/echarts/index'
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/landInfo.png',
      title: '土地信息',
      jumpUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/ZhongYangShi.png',
      title: '种养殖',
      jumpUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/agriculturalcapital.png',
      title: '农资投入',
      jumpUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/worker.png',
      title: '外出务工',
      jumpUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/income.png',
      title: '收入来源',
      jumpUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/inoculate.png',
      title: '新冠接种',
      jumpUrl: ''
    },
    {
      imgUrl: 'https://dvs-dev.sunlight-tech.com/wechat/images/family/snapshot.png',
      title: '随手拍',
      jumpUrl: ''
    }
  ])
  const jumpUrl = (url) => {
    push(url)
  }
</script>
<style lang="scss">
  .familyInfoModule_content {
    padding: 0rpx 20rpx;
    box-sizing: border-box;
    .flex_content {
      background-color: #fff;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      border-radius: 5px;
      padding: 50rpx 0 0;
      .flex_content_box {
        margin-bottom: 50rpx;
        width: 25%;
        .flex_content_img {
          width: 80rpx;
          height: 80rpx;
        }
        .flex_content_menber {
          font-size: 10px;
          font-weight: 300;
          line-height: 25px;
          color: #606266;
        }
      }
    }
  }
</style>
