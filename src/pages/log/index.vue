<template>
  <view style="display: flex; justify-content: space-between; align-items: center; padding: 10px">
    <uni-easyinput
      type="text"
      v-model="version"
      placeholder="请输入当前版本号"
      style="margin-right: 5rpx"
    ></uni-easyinput>
    <button style="display: flex; justify-content: center; align-items: center" @click="searchClick">查询</button>
  </view>
  <view style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-bottom: 20px">
    <view
      v-for="(item, index) in ['console', 'mp', 'mini']"
      :key="item"
      @click="projectClick(item, index)"
      :class="[index == state.selected ? 'selected' : 'not-selected']"
      >{{ item }}</view
    ></view
  >
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
import { useStorage } from "@vueuse/core";
import { format } from "date-fns";
const http = new Request();

// http://101.35.211.235:3001/api/v1/log/getListByVersion?version=3.1.0.002
const version = useStorage("version", "3.1.0.008");

const state = reactive({
  list: [],
  selected: 0,
  project: "console",
});
const projectClick = (project, index) => {
  if (index >= 0) {
    state.selected = index;
  }
  state.project = project;
  searchClick();
};

const searchClick = () => {
  let url = `/so/api/v1/log/getListByVersion?version=${version.value}`;
  if (state.project) {
    url = `${url}&project=${state.project}`;
  }
  http
    .get(url)
    .then((res) => {
      state.list = res.data.data;
    })
    .catch((err) => {
      console.log(err, "catch");
    });
};

searchClick();
</script>
<style>
button {
  background-color: #18bc37;
  height: 55rpx;
  color: white;
}

.item {
  margin: 0 40rpx;
}

.selected {
  color: white;
  border: 1px solid white;
  border-radius: 6px;
  background-color: #18bc37;
  padding: 4px 12px;
}

.not-selected {
  color: white;
  border: 1px solid white;
  background-color: #8f939c;
  border-radius: 6px;
  padding: 4px 12px;
}
</style>
