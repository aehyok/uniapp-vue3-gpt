<template>
  <view class="container">
    <uni-card is-full :is-shadow="false">
      <text class="uni-h6">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</text>
    </uni-card>
    <uni-section title="基本用法" type="line" padding>
      <uni-rate v-model="rateValue" @change="onChange" />
    </uni-section>
    <uni-section title="单选" type="line">
      <view class="uni-px-5 uni-pb-5">
        <view class="text">单选选中：{{ JSON.stringify(radio1) }}</view>
        <uni-data-checkbox v-model="radio1" :wrap="false" :localdata="sex"></uni-data-checkbox>
      </view>
    </uni-section>
    <button @click="editRoster">编辑</button>
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
.sss {
  height: 300px;
  width: 100px;
  background: #f2f2f2;
  color: beige;
}
</style>
