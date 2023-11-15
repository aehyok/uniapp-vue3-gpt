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
  <view class="deploy-button" @click="openDeploy">deploy</view>
  <uni-popup ref="popup" type="bottom" background-color="#fff">
    <div style="width: 100vw; height: 75vh">
      <view style="display: flex; justify-content: space-between; align-items: center; padding: 10px">
        <uni-easyinput
          type="text"
          v-model="state.cmdStr"
          placeholder="请输入命令行"
          style="margin-right: 5rpx"
        ></uni-easyinput>
        <button style="display: flex; justify-content: center; align-items: center" @click="deployClick('')">
          执行
        </button>
      </view>
      <view style="display: flex; justify-content: center; align-items: center; margin-top: 20px">
        <uni-tag
          :text="item"
          type="primary"
          style="margin: 5px"
          v-for="(item, index) in ['console', 'mp', 'mini']"
          :key="index"
          @click="deployClick(item)"
        ></uni-tag
      ></view>
      <view style="margin: 50px; display: grid; grid-template-columns: repeat(3, 1fr)">
        <uni-tag
          :text="item"
          type="success"
          style="margin: 5px"
          v-for="(item, index) in state.childList"
          :key="index"
          @click="deployClick(item)"
        ></uni-tag>
      </view>
    </div>
  </uni-popup>
</template>
<script setup>
import Request from "luch-request";
import { reactive, ref } from "vue";
import qs from "qs";
import { useStorage } from "@vueuse/core";
import { format } from "date-fns";
const http = new Request();

const version = useStorage("version", "3.1.0.008");

const pre = process.env.NODE_ENV === "development" ? "/so" : "/";

const popup = ref("");
const state = reactive({
  list: [],
  selected: 0,
  project: "console",
  childList: [
    "dvs-base",
    "dvs-village",
    "dvs-ffp",
    "dvs-cons",
    "dvs-company",
    "dvs-facility",
    "dvs-collect",
    "dvs-gis",
    "dvs-monitor",
  ],
  cmdStr: "",
});
const projectClick = (project, index) => {
  if (index >= 0) {
    state.selected = index;
  }
  state.project = project;
  searchClick();
};

const deployClick = (item) => {
  console.log("deployClick", item);
  if (item) {
    state.cmdStr = item;
  }
  if (!state.cmdStr) {
    uni.showToast({
      icon: "none",
      title: "请先选择要编译的项目",
    });
    return;
  }
  uni.showModal({
    title: "温馨提示",
    content: `确认即将编译项目:${state.cmdStr}`,
    showCancel: false,
    success: (e) => {
      if (e.confirm) {
        if (!item) {
          // 为空时则是执行命令
          deployApi();
        }
      }
    },
  });
};

const deployApi = () => {
  let url = `${pre}/api/node/cicd?t=${new Date().getTime()}`;
  http
    .post(url, {
      cmdStr: state.cmdStr,
    })
    .then((res) => {
      console.log(res, "post request");
    })
    .catch((err) => {
      console.log(err, "catch");
    });
};
const openDeploy = () => {
  console.log("openDeploy");
  popup.value.open("bottom");
};
const searchClick = () => {
  let timestamp = Date.now();
  const parames = {
    version: version.value,
    timestamp,
  };
  let url = `${pre}/api/v1/log/getListByVersion`;
  if (state.project) {
    parames.project = state.project;
  }
  console.log(qs.stringify(parames), "parames");
  url = `${url}?${qs.stringify(parames)}`;
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

.deploy-button {
  position: fixed;
  bottom: 100px;
  right: 30px;
  padding: 15px;
  border-radius: 40%;
  background-color: #18bc37;
  color: white;
  border-color: white;
}
</style>
