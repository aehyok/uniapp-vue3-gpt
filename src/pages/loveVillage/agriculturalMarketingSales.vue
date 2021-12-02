<template>
  <div class="farmProducts">
    <div
      v-for="(item, index) in Datalist"
      :key="index"
      @click="goDetails(item.id)"
      :class="index % 2 != 0 ? 'long' : 'short'"
    >
      <img :src="item.productUrl ? item.productUrl : 'head_portrait-02.png'" alt="" />
      <!-- <div style="height:20px" v-if="index%2 != 0"></div> -->
      <div style="padding: 10px">
        <p class="farmProducts_title">{{ item.name }} </p>
        <p class="farmProducts_price">
          <text class="farmProducts_spanOne">￥</text
          ><text class="farmProducts_spanTwo">{{ item.price }}</text
          ><text class="farmProducts_spanOne">&nbsp;元/斤</text>
        </p>
        <p class="farmProducts_num">数量：{{ item.number }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const Datalist = ref([
    {
      productUrl: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      name: '苹果啊',
      price: '100',
      number: '50'
    },
    {
      productUrl: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      name: '苹果啊',
      price: '100',
      number: '50'
    },
    {
      productUrl: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
      name: '苹果啊',
      price: '100',
      number: '50'
    }
  ])
</script>
<style lang="scss">
  .farmProducts {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div:nth-child(1),
    & > div:nth-child(2) {
      margin-top: 0px;
    }

    & > div {
      width: 48%;
      border-radius: 3px;
      background: #fff;
      margin-top: 10px;
      img {
        width: 100%;
        height: 166px;
      }
      .farmProducts_title {
        margin: 0;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #303133;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 5px;
        text-align: left;
      }
      .farmProducts_price {
        text-align: left;
      }
      .farmProducts_num {
        margin: 0;
        margin-top: 5px;
        text-align: left;
        font-weight: 400;
        color: #909399;
        font-size: 12px;
      }
      .farmProducts_spanOne {
        font-size: 12px;
        color: #d33232;
      }
      .farmProducts_spanTwo {
        font-size: 24px;
        color: #d33232;
      }
    }
  }
</style>
