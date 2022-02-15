<template>
  <div class="fillInformationForVillager">
    <div class="main">
      <div class="flex" v-for="(item, index) in Datalist" :key="index" @click="goDetails(item.id)">
        <p class="itemCollagen_title itemCollagen_overhidd"
          ><text style="font-weight: 800; margin-right: 8rpx">·</text>{{ item.messageName }}</p
        >
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
          url: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        }
      ],
      messageName: '撒娇的卡萨丁就撒开对面萨迪克萨满的思考撒娇的卡萨丁纠结撒扩大没事',
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
  .itemCollagen_overhidd {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #555;
  }
</style>
