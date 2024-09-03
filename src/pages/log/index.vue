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
  <view v-if="state.selected == 0" style="margin-bottom: 60px" class="shining-border">
    <view
      style="
        position: relative;
        z-index: 1;
        display: flex;
        line-height: 25px;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      "
      v-for="(item, index) in state.consoleResult"
      :key="index"
    >
      <view class="circle-number">{{ index + 1 }}</view>
      <view>{{ item }}</view>
    </view>
  </view>
  <view v-if="state.selected == 1" style="margin-bottom: 60px" class="shining-border">
    <view
      style="
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      "
      v-for="(item, index) in state.mpResult"
      :key="index"
    >
      <view class="circle-number">{{ index + 1 }}</view>
      <view>{{ item }}</view>
    </view>
  </view>
  <view v-if="state.selected == 2"> </view>
  <view v-for="(item, index) in state.list" :key="index">
    <view class="item">版本号：{{ item.version }}</view>
    <view class="item">时间：{{ format(new Date(item.createTime), "yyyy-MM-dd HH:mm:ss") }}</view>
    <view class="item">项目：{{ item.project }}</view>
    <view class="item">类型：{{ item.type }}</view>
    <view class="item">内容：{{ item.content }}</view>
    <view style="border-bottom: 1px solid red"></view>
  </view>
  <view v-if="false" class="deploy-button" @click="openDeploy">deploy</view>
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
  mpResult: [],
  consoleResult: [],
  project: "console",
  childList: [
    "dvs-main",
    "dvs-base",
    "dvs-village",
    "dvs-ffp",
    "dvs-cons",
    "dvs-company",
    "dvs-facility",
    "dvs-collect",
    "dvs-gis",
    "dvs-monitor",
    "dvs-workflow",
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
      const infoList = state.list.filter((info) => info.type == "info");
      if (state.selected == 0) {
        state.consoleResult = [];
        state.childList.forEach((item) => {
          console.log(item, "item");
          let containList = infoList.filter((info) => info.content.includes(item));
          if (containList.length > 0) {
            state.consoleResult.push(item);
          }
        });
      } else if (state.selected == 1) {
        // mp的话直接根据info的数量进行判断
        state.mpResult = [];
        console.log(infoList.length, "infoList");
        if (infoList.length == 11) {
          state.mpResult.push("git pull success");
          state.mpResult.push("yarn、yarn build suceess");
          state.mpResult.push("git tag suceess");
          state.mpResult.push("git push release success");
          state.mpResult.push("copy to dev and sit success");
        }
      } else if (state.selected == 2) {
        console.log("state.selected == 2");
      }
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

.shining-border {
  width: 280px;
  height: 280px;
  margin: auto;
  padding-left: 20px;
  display: flex;
  justify-content: center;

  position: relative;
  flex-direction: column;
  overflow: hidden;
}

.shining-border::before {
  content: ".";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #92ec92 60deg,
    #00ff00 120deg,
    #20e620 180deg,
    #20e620 240deg,
    #0dbd0d 300deg,
    transparent 360deg
  );
  animation: rotate 8s linear infinite;
}

.shining-border::after {
  content: "";
  position: absolute;
  inset: 5px;
  background: white;
  border-radius: 15px;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.circle-number {
  position: relative;
  display: inline-block;
  margin-right: 8px;
  font-size: 14px; /* 根据需要调整字体大小 */
}

.circle-number::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px; /* 根据需要调整圆圈大小 */
  height: 20px; /* 根据需要调整圆圈大小 */
  border-radius: 50%;
  background-color: #20e620; /* 根据需要调整圆圈颜色 */
  z-index: -1; /* 将圆圈置于数字后面 */
}
</style>
