<template>
  <div class="halfTop">
    <div class="mineBoxInfo_modlue">
      <div class="mineBoxInfo_back">
        <img src="https://dvs-dev.sunlight-tech.com/wechat/images/mine/Icon-header.png" alt="" />
        <p class="name">陈双尾</p>
        <p class="phone">联系电话：13433304099</p>
        <p class="address">地址：天天溪村天溪村天溪村天溪村天溪村溪村xi</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
  .halfTop {
    background-image: url('https://dvs-dev.sunlight-tech.com/wechat/images/mine/top.png');
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 100% 200px;
    padding: 0 20rpx;
    box-sizing: border-box;
    .mineBoxInfo_modlue {
      position: relative;
      top: 90px;
      width: 100%;
      height: 136px;
      background: #ffffff;
      opacity: 1;
      box-sizing: border-box;
      border-radius: 5px;
      .mineBoxInfo_back {
        padding: 0 30px;
        img {
          width: 70px;
          height: 70px;
          margin-top: -25px;
        }
        .name {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          color: #303133;
        }
        .phone,
        .address {
          font-size: 12px;
          font-weight: 300;
          line-height: 20px;
          color: #909399;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
