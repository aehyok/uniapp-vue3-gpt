<template>
  <div class="serviceForLife">
    <div
      class="lifeToProduct"
      :style="{ backgroundImage: 'url(' + props.item.left.backgroundImg + ')' }"
    >
      <div v-if="props.item.left.title == '优质农产品'" style="padding: 20px 25px">
        <div class="lifeToProductLeftTitle">{{ props.item.left.title }}</div>
        <img :src="props.item.left.imgUrl" alt="" class="lifeToProductLeftImg" />
      </div>
      <div v-if="props.item.left.title == '村情概况'" style="padding: 15px">
        <div class="lifeToProductLeftTitle">{{ props.item.left.title }}</div>
        <p><text style="font-weight: 800; margin-right: 8rpx">·</text>村简介</p>
        <p><text style="font-weight: 800; margin-right: 8rpx">·</text>治理数据</p>
        <p><text style="font-weight: 800; margin-right: 8rpx">·</text>·······</p>
        <button class="lifeToProductLeftTitleBtn">村情查看 ></button>
      </div>
    </div>
    <div class="convenienceOfPeople">
      <div
        v-for="(item, index) in props.item.right"
        :key="index"
        :style="{ backgroundImage: 'url(' + item.backgroundImg + ')' }"
        class="convenienceOfPeopleRight"
      >
        <div class="convenienceOfPeopleRightPadding">
          <img :src="item.imgUrl" alt="" />
          <text>{{ item.title }} </text>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    item: {
      type: Object,
      default: () => {}
    }
  })
  const list = ref([
    {
      name: '村庄数',
      num: 3654120
    },
    {
      name: '村民数',
      num: 55
    },
    {
      name: '党员树',
      num: 651421
    }
  ])
</script>
<style lang="scss">
  .serviceForLife {
    display: flex;
    justify-content: space-between;
    .lifeToProduct {
      width: 49%;
      height: 280rpx;
      background-color: #fff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
      border-radius: 5px;
      background-size: 100% 280rpx;
      background-repeat: no-repeat;
      .lifeToProductLeftImg {
        margin-top: 50rpx;
        width: 200rpx;
        text-align: left;
        height: 80rpx;
      }
      .lifeToProductLeftTitle {
        font-size: 20px;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
        // padding: 15px;
      }
      p {
        text-align: left;
        font-size: 12px;
        font-weight: 300;
        line-height: 15px;
        color: #ffffff;
        margin: 10rpx 0;
      }
      .lifeToProductLeftTitleBtn {
        width: 89px;
        height: 23px;
        background: #ffffff;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 50px;
        color: #a78600;
        font-size: 12px;
        line-height: 25px;
      }
    }
    .convenienceOfPeople {
      display: flex;
      width: 49%;
      flex-flow: column;
      justify-content: space-between;

      .convenienceOfPeopleRight {
        width: 100%;
        height: 48%;
        background-color: #fff;
        border-radius: 5px;
        background-repeat: no-repeat;
        background-size: 100%;
        .convenienceOfPeopleRightPadding {
          padding: 18px 0 10px 18px;
          display: flex;
          img {
            width: 60rpx;
            height: 60rpx;
          }
          text {
            margin-left: 10px;
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
