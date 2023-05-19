<template>
  <view class="container">
    <view class="header"> 登录 </view>
    <view class="balance">
      <view class="mybalance">我的余额</view>

      <view class="card">
        <uni-card title="剩余条数" extra="0" :thumbnail="avatar" @click="onClick">
          <text class="uni-body">通过在线充值可以获得永久有效的余额</text>
          <text class="gojunp">去充值></text>
        </uni-card>
        <uni-card title="体验条数" extra="0" :thumbnail="avatar" @click="onClick">
          <text class="uni-body">通过在线充值可以获得永久有效的余额</text>
          <text class="gojunp">做任务></text>
        </uni-card>
      </view>
    </view>
    <view class="sectioncontent">
      <uni-section class="mb-10" title="余额明细" type="line">
        <template v-slot:right> <uni-icons type="forward" size="15"></uni-icons> </template>
      </uni-section>
      <uni-section class="mb-10" title="我的点赞" type="line">
        <template v-slot:right><uni-icons type="forward" size="15"></uni-icons> </template>
      </uni-section>
      <uni-section class="mb-10" title="我的收藏" type="line">
        <template v-slot:right> <uni-icons type="forward" size="15"></uni-icons> </template>
      </uni-section>
      <uni-section class="mb-10" title="提问记录" type="line">
        <template v-slot:right> <uni-icons type="forward" size="15"></uni-icons> </template>
      </uni-section>
      <uni-section class="mb-10" title="意见反馈" type="line">
        <template v-slot:right> <uni-icons type="forward" size="15"></uni-icons> </template>
      </uni-section>
    </view>
  </view>
</template>

<script setup>
// const aaa =  ()  => {}
let radio1 = 0;
const sex = [
  {
    text: "男",
    value: 0,
  },
  {
    text: "男",
    value: 1,
  },
  {
    text: "男",
    value: 2,
  },
];
const editRoster = () => {
  uni.navigateTo({
    url: "/ffp-pages/roster/roster-detail",
  });
};
</script>
<style lang="scss" scoped>
.header {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  background-color: #f1ece3;
}
.balance {
  width: 95%;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 6rpx;
  margin: 20rpx auto;
  box-sizing: border-box;
  background-color: #fffaf6;
}
.mybalance {
  color: #baa06c;
  padding: 20rpx 0 0 30rpx;
}
.card {
  display: flex;
  justify-content: space-between;
}
.gojunp {
  display: block;
  text-align: right;
}
.mb-10 {
}
:deep(.uni-section-header) {
  background-color: #fffaf6;
}
.sectioncontent {
  width: 95%;
  margin: auto;
  border-radius: 6rpx;
  margin: 20rpx auto;
  box-sizing: border-box;
  background-color: #fffaf6;
}
</style>
