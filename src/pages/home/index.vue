<template>
  <view class="container">
    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item>
          <view class="swiper-item uni-bg-red">
            <image
              src="https://img1.baidu.com/it/u=2463514011,1142503686&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500"
            ></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">
            <image
              src="https://img2.baidu.com/it/u=923478948,106462584&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684602000&t=7831fa62e948620a9b5fe4bfd68f14ab"
            ></image>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">
            <image
              src="https://img2.baidu.com/it/u=3107178066,1951512797&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684602000&t=96d7f2157a399154b0ec24f0327d2e35"
            ></image>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <uni-notice-bar
      show-icon
      scrollable
      :speed="50"
      text="人生是由各种不同的变故、循环不已的痛苦和欢乐组成的。那种永远不变的蓝天只存在于心灵中，向现实的人生去要求未免是奢望。"
    />
    <view class="issue">
      <uni-easyinput class="textarea" type="textarea" v-model="value" placeholder="请输入您的问题"></uni-easyinput>
      <button @click="editRoster">获取答案</button>
    </view>
    <uni-section class="mb-10" title="智慧广场" type="line"></uni-section>
    <template v-for="(item, index) in data" :key="index">
      <uni-card
        :title="item.title"
        :sub-title="item.subTitle"
        :extra="item.extra"
        :border="true"
        margin="10rpx"
        :is-shadow="true"
        thumbnail="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
        @click="onClick(item.id)"
      >
        <text class="uni-badyTitle">{{ item.badyTitle }}</text>
        <view class="uni-body">{{ item.badyContent }}</view>
        <view slot="actions" class="card-actions">
          <view class="card-actions-item" @click="actionsClick('点赞')">
            <uni-icons type="heart" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">点赞</text>
          </view>
          <view class="card-actions-item" @click="actionsClick('评论')">
            <uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
            <text class="card-actions-item-text">评论</text>
          </view>
        </view>
      </uni-card>
    </template>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { homeData } from "@/configItem/index.js";
let value = "";
const indicatorDots = true;
const autoplay = true;
const interval = 2000;
const duration = 800;
const data = ref(homeData);
const editRoster = () => {
  console.log(value, "aa");
  if (!value) {
    uni.showToast({
      icon: "none",
      title: "请输入您的问题",
    });
  } else {
    data.value.push({
      id: 5,
      title: "小程序访客",
      subTitle: "性别：男",
      extra: "查看详情",
      avatar: "https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
      badyTitle: value,
      badyContent: value,
    });
    value = "";
  }
};
const onClick = (id: number) => {
  uni.navigateTo({
    url: `/pages/answer-detail/index?id=${id}`,
  });
};
</script>
<style lang="scss" scoped>
.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}
.swiper {
  height: 300rpx;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  image {
    width: 100%;
    height: 100%;
  }
}
.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}
.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}
.info {
  position: absolute;
  right: 20rpx;
}
.uni-padding-wrap {
  width: 550rpx;
  padding: 0 100rpx;
}
.issue {
  padding: 20rpx;
  :deep(.uni-easyinput) {
    border: 2rpx solid #fbe09d;
  }
  button {
    margin-top: 10px;
    background-color: #fbe09d;
    color: #ff8158;
    font-weight: 500;
  }
}

.container {
  background: #fffaf6;
}

.uni-badyTitle {
  display: block;
  color: #baa06c;
  margin: 10rpx 0;
}
.card-actions {
  display: flex;
  justify-content: flex-end;
  .card-actions-item {
    margin: 10px 10px 10px 10px;
  }
}
.uni-body {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 超出几行省略 */
  overflow: hidden;
}
</style>
