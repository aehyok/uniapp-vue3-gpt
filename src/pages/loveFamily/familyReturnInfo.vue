<template>
  <div class="famliyReturnInfo">
    <div class="famliyReturnInfoBox">
      <div class="famliyReturnInfoBox_title">
        <div>家庭成员</div>
        <div>最新登记日期</div>
        <div>异常情况</div>
      </div>
      <div class="famliyReturnInfoBox_body" v-for="(item, index) in 4" :key="index">
        <div>名字{{ item }}</div>
        <div>日期{{ item }}</div>
        <div>异常情况{{ item }}</div>
      </div>
    </div>
    <div style="padding: 0px 0 10px; color: #018463; font-size: 12px">查看更多</div>
  </div>
</template>
<style lang="scss">
  .famliyReturnInfo {
    background: #fff;
    .famliyReturnInfoBox {
      padding: 15px;
      .famliyReturnInfoBox_title {
        display: flex;
        justify-content: space-between;
        div {
          width: 32.5%;
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
        justify-content: space-between;
        div {
          width: 32.5%;
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
          }
        }
      }
    }
  }
</style>
