<template>
  <div class="fillInformationForVillager">
    <div class="main">
      <div class="flex" v-for="(item, index) in Datalist" :key="index" @click="goDetails(item.id)">
        <p class="itemCollagen_title">{{ item.messageName }}</p>
      </div>
    </div>
    <div>查看更多</div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const Datalist = ref([
    {
      imageFiles: [
        {
          url: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        }
      ],
      messageName: 'wtamekdnkasdn',
      createdAt: '2021年12月2日10点55分',
      createdByDeptName: '陈爽位'
    },
    {
      imageFiles: [
        {
          url: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        }
      ],
      messageName: 'wtamekdnkasdn',
      createdAt: '2021年12月2日10点55分',
      createdByDeptName: '陈爽位'
    },
    {
      imageFiles: [],
      messageName: 'wtamekdnkasdn',
      createdAt: '2021年12月2日10点55分',
      createdByDeptName: '陈爽位'
    },
    {
      imageFiles: [
        {
          url: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
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
    // height: 300rpx;
    background: #fff;
    .main {
      .flex {
        display: flex;
        background: #fff;
        padding: 5px 12px;
        border-radius: 1px;
        .itemCollagen {
          width: 100%;
        }
        .itemCollagenSeventy {
          width: 80%;
        }
        .itemCollagen,
        .itemCollagenSeventy {
          .itemCollagen_title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: #333;
            font-weight: bold;
            text-align: left;
            font-size: 16px;
            margin: 15px 0;
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
        div:nth-child(2) {
          width: 20%;
          margin-top: 5px;
          text-align: right;
          img {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
</style>
