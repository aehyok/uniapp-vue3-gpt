<template>
  <div class="familyLandInfo">
    <div class="familyLandInfoBox">
      <div class="familyLandInfoBoxLeft">
        <p class="houseSiteNum"><text>180</text><text>m²</text></p>
        <p class="houseSiteName">宅基地</p>
      </div>
      <div class="familyLandInfoBoxRight">
        <div v-for="(item, index) in 3" :key="index">
          <p>
            <text style="font-size: 16px">耕地{{ item }}</text>
            <text style="font-size: 24px"
              ><text>8</text><text style="font-size: 12px; margin-left: 5px">亩</text></text
            >
          </p>
        </div>
      </div>
    </div>
    <div style="padding: 0px 0 10px; color: #018463; font-size: 12px">查看更多</div>
  </div>
</template>
<style lang="scss">
  .familyLandInfo {
    background: #fff;
    border-radius: 5px;
    .familyLandInfoBox {
      padding: 15px;
      display: flex;
      justify-content: space-between;
      .familyLandInfoBoxLeft {
        width: 150px;
        height: 150px;
        background: #ccc;
        background-image: url('https://dvs-dev.sunlight-tech.com/wechat/images/family/bg_housesite.png');
        background-repeat: no-repeat;
        background-size: 150px;
        .houseSiteNum {
          text-align: left;
          padding: 20px;
          color: #ffffff;
          text:nth-child(1) {
            font-size: 40px;
            font-weight: 400;
            line-height: 56px;
          }
        }
        .houseSiteName {
          text-align: right;
          color: #fff;
          font-size: 14px;
          padding-right: 20px;
        }
      }
      .familyLandInfoBoxRight {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        div {
          width: 163px;
          height: 43px;
          p {
            line-height: 43px;
            display: flex;
            padding: 0 20px;
            justify-content: space-between;
            color: #fff;
          }
        }
        div:nth-child(1) {
          background-image: url('https://dvs-dev.sunlight-tech.com/wechat/images/family/bg_plough.png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
        div:nth-child(2) {
          background-image: url('https://dvs-dev.sunlight-tech.com/wechat/images/family/bg_privatePlot .png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
        div:nth-child(3) {
          background-image: url('https://dvs-dev.sunlight-tech.com/wechat/images/family/bg_forest.png');
          background-size: 100%;
          background-repeat: no-repeat;
        }
      }
    }
  }
</style>
