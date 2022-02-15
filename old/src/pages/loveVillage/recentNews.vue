<template>
  <div class="fillInformationForVillager">
    <div class="main">
      <div class="flex" v-for="(item, index) in Datalist" :key="index" @click="goDetails(item.id)">
        <div :class="!item.imageFiles[0] ? 'itemCollagen' : 'itemCollagenSeventy'">
          <p class="itemCollagen_title">
            <img
              src="https://dvs-dev.sunlight-tech.com/wechat/images/village/top.png"
              alt=""
              class="itemCollagen_title_Img"
            />
            {{ item.messageName }}
          </p>
          <p class="itemCollagen_creatNameOrTime">
            <text :class="item.createdByDeptName ? 'createdByDeptName' : ''">{{
              item.createdByDeptName ? item.createdByDeptName : ''
            }}</text>
            {{ item.createdAt }}
          </p>
        </div>
        <div class="flex_SeconDiv" v-if="item.imageFiles[0]">
          <img :src="item.imageFiles[0].url" alt="" />
        </div>
      </div>
    </div>
    <div style="padding: 10px 0; color: #018463; font-size: 12px">查看更多</div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const Datalist = ref([
    {
      imageFiles: [
        {
          url: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/recentnews.png'
        }
      ],
      messageName:
        'wtamekdnkasdasdasds案件大手大脚mask大司马昆德拉寿命可达六十考试的卡送的卡soda时刻都菩萨打开sdn',
      createdAt: '2021年12月2日10点55分',
      createdByDeptName: '陈爽位'
    },
    {
      imageFiles: [
        {
          url: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/recentnews.png'
        }
      ],
      messageName: '中文',
      createdAt: 'swiper_module_body ',
      createdByDeptName: '陈爽位'
    },
    {
      imageFiles: [],
      messageName:
        'ask大师的开始啦的，阿斯顿撒旦，是打开的拉风阿克苏打算看的， 奥地利卡死了阿斯顿靠贷款',
      createdAt: '2021年12月2日10点55分',
      createdByDeptName: '陈爽位'
    },
    {
      imageFiles: [
        {
          url: 'https://dvs-dev.sunlight-tech.com/wechat/images/village/recentnews.png'
        }
      ],
      messageName: 'wtamekdnkasdn',
      createdAt: '2021年12月2日10点55分',
      createdByDeptName: '陈爽位'
    }
  ])
  const goDetails = () => {}
</script>
<style lang="scss">
  .fillInformationForVillager {
    padding: 0 20rpx;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    .main {
      .flex {
        display: flex;
        background: #fff;
        width: 100%;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px 0;
        border-radius: 1px;
        border-bottom: 1px solid #e5e7eb;
        .itemCollagen {
          width: 100%;
        }
        .itemCollagenSeventy {
          width: 70%;
        }
        .itemCollagen,
        .itemCollagenSeventy {
          .itemCollagen_title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: #333;
            font-weight: 600;
            text-align: left;
            font-size: 16px;
            margin: 6px 0;
            height: 42px;
            .itemCollagen_title_Img {
              width: 35px;
              height: 16px;
              border-radius: 4px;
            }
          }
          .itemCollagen_creatNameOrTime {
            font-weight: 400;
            display: block;
            text-align: left;
            margin-bottom: 5px;
            color: #909399;
            font-size: 12px;
          }
        }
        .flex_SeconDiv {
          width: 30%;
          margin-top: 5px;
          text-align: right;
          img {
            width: 89px;
            height: 62px;
          }
        }
      }
    }
  }
</style>
