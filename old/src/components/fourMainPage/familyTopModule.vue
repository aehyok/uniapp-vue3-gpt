<template>
  <div>
    <div class="family_module_head" id="familyTopModuleBox">
      <div class="family_module_head_left">
        <img
          class="family_module_head_left_img"
          src="https://dvs-dev.sunlight-tech.com/wechat/images/family/header.png"
          alt=""
        />
        <div class="family_module_head_left_info">
          <p class="family_module_head_left_Name">
            <text> 户主姓名：</text>
            <text>一水龙</text>
            <img src="https://dvs-dev.sunlight-tech.com/wechat/images/family/more.png" alt="" />
          </p>
          <p class="family_module_head_left_Name">
            <text>联系方式：</text>
            <text class="family_module_head_left_nobold">13433304099</text>
            <img src="https://dvs-dev.sunlight-tech.com/wechat/images/family/phone.png" alt="" />
          </p>
          <p class="family_module_head_left_Name">
            <text>家庭积分：</text>
            <text class="family_module_head_left_nobold">11213133524</text>
            <img src="https://dvs-dev.sunlight-tech.com/wechat/images/family/more.png" alt="" />
          </p>
        </div>
      </div>
    </div>
    <div class="swiper_module_body_DoorplateTag">
      <img
        class="swiper_module_body_img"
        v-for="(item, index) in 1"
        alt=""
        src="https://dvs-dev.sunlight-tech.com/wechat/images/family/wenMinghu.png"
      />
      <img
        class="swiper_module_body_img"
        v-for="(item, index) in 2"
        alt=""
        src="https://dvs-dev.sunlight-tech.com/wechat/images/family/wenMinghu.png"
      />
    </div>
  </div>
  <div class="familyTopModuleNumberInformation" @tap="go"> 是我埃斯了昨天 </div>
  <div class="familyTopModuleNumberInTheCover">
    <img src="https://dvs-dev.sunlight-tech.com/wechat/images/family/Replacethecover.png" alt="" />
    换封面
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import itemDataVue from './itemData.vue'

  const horseLamp1 = ['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']

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
  const go = () => {
    console.log('go哪里')
    const div = document.getElementById('familyTopModuleBox')
    console.log(div.offsetHeight) // 224
  }
  onMounted(() => {})
</script>
<style lang="scss">
  .family_module_head {
    padding: 50rpx 30rpx;
    // display: flex;
    // justify-content: space-between;
    .family_module_head_left {
      display: flex;
      justify-content: space-between;
      .family_module_head_left_img {
        width: 24%;
        height: 76px;
      }
      .family_module_head_left_info {
        width: 70%;
        text-align: left;
        .family_module_head_left_Name {
          position: relative;
          height: 25px;
          border-bottom: 1px solid #e5e7eb;

          text:nth-child(1) {
            font-size: 12px;
            font-weight: 300;
            line-height: 17px;
            color: #909399;
          }
          text:nth-child(2) {
            font-size: 18px;
            font-weight: 600;
            line-height: 25px;
            color: #303133;
          }
          img {
            position: absolute;
            top: 5px;
            right: 10px;
            width: 15px;
            height: 15px;
          }
          .family_module_head_left_nobold {
            font-weight: 300 !important;
          }
        }
      }
    }
  }
  .swiper_module_body_DoorplateTag {
    display: flex;
    justify-content: space-between;
    padding: 0 30rpx;
    flex-wrap: wrap;
    .swiper_module_body_img {
      width: 31%;
      height: 60rpx;
      margin-bottom: 10px;
    }
  }
  .familyTopModuleNumberInformation {
    position: absolute;
    top: -100px;
    left: -10px;
    height: 20px;
    padding: 1px 10px;
    background-color: rgba(1, 132, 99, 0.75);
    color: #fff;
    font-size: 14px;
    border-radius: 0px 10px 10px 0px;
  }
  .familyTopModuleNumberInTheCover {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    top: -30px;
    width: 60px;
    right: -10px;
    background-color: rgba(101, 109, 110, 0.75);
    border-radius: 10px 0px 0px 10px;
    padding: 1px 10px;

    color: #fff;
    font-size: 14px;
    img {
      width: 22rpx;
      height: 22rpx;
    }
  }
</style>
