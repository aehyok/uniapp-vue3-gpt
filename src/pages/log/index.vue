<template>
  <view style="display: flex; justify-content: space-between; align-items: center; padding: 10px">
    <uni-easyinput
      type="text"
      v-model="state.version"
      placeholder="请输入当前版本号"
      style="margin-right: 5rpx"
    ></uni-easyinput>
    <button style="display: flex; justify-content: center; align-items: center" @click="searchClick">查询</button>
  </view>
  <view v-for="(item, index) in state.list" :key="index">
    <view class="item">版本号：{{ item.version }}</view>
    <view class="item">时间：{{ format(new Date(item.createTime), "yyyy-MM-dd HH:mm:ss") }}</view>
    <view class="item">项目：{{ item.project }}</view>
    <view class="item">类型：{{ item.type }}</view>
    <view class="item">内容：{{ item.content }}</view>
    <view style="border-bottom: 1px solid red"></view>
  </view>
</template>
<script setup>
import Request from "luch-request";
import { reactive } from "vue";
import { format } from "date-fns";
const http = new Request();

// http://101.35.211.235:3001/api/v1/log/getListByVersion?version=3.1.0.002
const state = reactive({
  version: "3.1.0.007",
  list: [],
});

const searchClick = () => {
  http
    .get(`/so/api/v1/log/getListByVersion?version=${state.version}`)
    .then((res) => {
      state.list = res.data.data;
    })
    .catch((err) => {
      console.log(err, "catch");
    });
};
</script>
<style>
button {
  background-color: #9da3fb;
  height: 55rpx;
}

.item {
  margin: 0 40rpx;
}
</style>
