<template>
  <div class="three_modules">
    <div v-for="(item, index) in 3" class="forModules">
      <img
        class="forModulesImg"
        src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
        alt=""
      />
      <div>
        <span>认证我的家乡</span>
        <span>后稷故里，农科新城，乡村振兴，您我参与</span>
      </div>
      <div>></div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
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
  .three_modules {
    // width: 90%;
    margin-top: 200rpx;
    padding: 10rpx 20rpx;
    .forModules {
      display: flex;
      align-items: center;
      width: 100%;
      height: 200rpx;
      margin: 30rpx 0;
      padding: 0 20rpx;
      background-color: #fff;
      .forModulesImg {
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
</style>
