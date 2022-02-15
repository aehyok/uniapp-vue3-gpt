<template>
  <div class="familyInoculateInfo">
    <div class="famliyReturnInfoBox">
      <div class="famliyReturnInfoBox_title">
        <div>家庭成员</div>
        <div>第一针</div>
        <div>第二针</div>
        <div>第三针</div>
      </div>
      <div class="famliyReturnInfoBox_body" v-for="(item, index) in 4" :key="index">
        <div>名字{{ item }}</div>
        <div>
          <img
            src="https://dvs-dev.sunlight-tech.com/wechat/images/family/inoculate -yijing.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://dvs-dev.sunlight-tech.com/wechat/images/family/inoculate -yijing.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://dvs-dev.sunlight-tech.com/wechat/images/family/inoculate -yijing.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div style="padding: 0px 0 10px; color: #018463; font-size: 12px">查看更多</div>
  </div>
</template>
<style lang="scss">
  .familyInoculateInfo {
    background: #fff;
    .famliyReturnInfoBox {
      padding: 15px;
      .famliyReturnInfoBox_title {
        display: flex;
        div {
          width: 81px;
          height: 40px;
          line-height: 40px;
          background: rgba(48, 49, 51, 0.12);
          border: 1px solid #ffffff;
          opacity: 1;
          border-radius: 3px 0px 0px 3px;
          font-size: 13px;
          color: #606266;
        }
      }
      .famliyReturnInfoBox_body {
        display: flex;
        div {
          width: 81px;
          height: 40px;
          line-height: 40px;
          background: rgba(48, 49, 51, 0.03);
          border: 1px solid #ffffff;
          opacity: 1;
          border-radius: 3px 0px 0px 3px;
          font-size: 14px;
          color: #303133;
          img {
            width: 22px;
            height: 18px;
            vertical-align: -11%;
          }
        }
      }
    }
  }
</style>
