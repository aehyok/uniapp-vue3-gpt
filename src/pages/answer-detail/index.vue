<template>
  <view class="answer-detail">
    <view class="answer-detail-header">
      <image :src="objItem.avatar" alt="" />
      <text class="title">{{ objItem.title }}</text>
    </view>
    <view class="answer-detail-bady">
      <text>问题：{{ objItem.badyTitle }}</text>
      <text>答：{{ objItem.badyContent }}</text>
    </view>
  </view>
</template>
<script setup>
import { homeData } from "@/configItem/index.js";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
const objItem = ref({});
onLoad((option) => {
  objItem.value = homeData.find((res) => res.id == option.id);
  console.log(option, "option", objItem.value);
});
</script>
<style scoped lang="scss">
.answer-detail {
  background: #fffaf6;
  padding: 0 20rpx;
  // height: 100vh;
  overflow: hidden;
  &-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40rpx 0 20rpx 0;
    image {
      width: 100rpx;
      height: 100rpx;
    }
    .title {
      color: #baa06c;
    }
  }
  &-bady {
    text {
      display: block;
    }
    text:nth-child(1) {
      // line-height: 60rpx;
      height: 90rpx;
      border-bottom: 1px solid #ccc;
    }
    text:nth-child(2) {
      margin-top: 30rpx;
    }
  }
}
</style>
