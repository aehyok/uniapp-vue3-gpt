<template>
  <div class="postCasualPhotos">
    <!-- 数据传进来，可在《查看更多》使用中 -->
    <div style v-if="props.data && props.data.length > 0">
      <div
        class="ResidentsConent"
        v-for="(item, index) in props.data"
        :key="index"
        @click="pending(item.id)"
      >
        <div class="ConentFont">
          <div style="display: flex">
            <div class="ConentImg">
              <img src="https://dvs-dev.sunlight-tech.com/wechat/images/family/header.png" alt />
            </div>
            <div class="ConentFontOne">
              <div class="name">
                <div>
                  <text class="person">{{ item.realName }}</text>
                  <text class="block" v-if="item.relationship !== ''">{{ item.relationship }}</text>
                </div>
                <text class="dateTime">{{ item.createdAt }}</text>
              </div>
              <div class="eventName">
                <img
                  src="https://dvs-dev.sunlight-tech.com/wechat/images/family/toDealWith.png"
                  alt=""
                />
                {{ item.descript }}啊大苏打萨达萨达萨达萨达萨达撒旦阿三大苏打实打实的
              </div>
              <!-- 多图 -->
              <div
                v-if="item.imageFiles && item.imageFiles.length > 1"
                :class="item.imageFiles.length !== 2 ? 'imgContainer' : 'doubleImg'"
              >
                <img
                  class="manyImg"
                  :src="item.url"
                  v-for="(item, index) in item.imageFiles"
                  :key="index"
                  v-show="index <= 2"
                />
                <div
                  v-if="item.imageFiles && item.imageFiles.length > 3"
                  :class="item.imageFiles && item.imageFiles.length > 3 ? 'imgMask' : ''"
                  >共{{ item.imageFiles ? item.imageFiles.length : '' }}张</div
                >
              </div>
              <!-- 单图 -->
              <div v-if="item.imageFiles && item.imageFiles.length === 1" class="soloImg">
                <img
                  class="manyImg"
                  :src="item.url"
                  v-for="(item, index) in item.imageFiles"
                  :key="index"
                  v-show="index <= 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding: 10px 0; color: #018463; font-size: 12px">查看更多</div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    }
  })
</script>
<style lang="scss">
  .postCasualPhotos {
    // height: 400rpx;
    background-color: #fff;
    border-radius: 5px;
    .ResidentsConent {
      display: flex;
      padding: 0 13px;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e7eb;
      margin-top: 20px;
      .ConentImg {
        width: 45px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .ConentFont {
        width: 100%;
        .ConentFontOne {
          // display: flex;
          width: 100%;
          .name {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 100%;
            text-align: left;
            padding: 0 0 0 2vw;
            .person {
              font-size: 16px;
              line-height: 26px;
              font-weight: bold;
              color: #606266;
            }
            .block {
              border-radius: 10px;
              padding: 1px 10px;
              margin: 0 5px 0 5px;
              font-size: 10px;
              color: #38a88d;
              background-color: rgba(10, 196, 150, 0.1);
              vertical-align: 14%;
            }
            .dateTime {
              font-size: 10px;
              font-weight: 400;
              color: #999999;
              line-height: 14px;
            }
          }
        }
        .eventName {
          font-size: 16px;
          font-weight: 400;
          color: #333;
          margin: 2.5vw 0 4vw 7px;
          text-align: left;
          img {
            width: 56px;
            height: 21px;
            vertical-align: -22%;
          }
        }
        .manyImg {
          border-radius: 3%;
          object-fit: cover;
        }
        //  大于两张样式
        .imgContainer {
          position: relative;
          display: flex;
          justify-content: space-between;
          .manyImg {
            width: 25vw;
            height: 25vw;
          }
          .imgMask {
            width: 25vw;
            height: 25vw;
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            display: flex;
            justify-content: center;
            align-content: center;
            top: 0;
            right: 0;
            color: #ffffff;
            line-height: 25vw;
          }
        }
        //  单张图
        .soloImg {
          .manyImg {
            max-width: 76vw;
            max-height: 50vw;
            object-fit: contain;
          }
        }
        // 两张图
        .doubleImg {
          text-align: left;
          .manyImg {
            width: 25vw;
            height: 25vw;
            margin-right: 2.5vw;
          }
        }
      }
    }
    .ResidentsConent:nth-child(1) {
      padding-top: 20px;
      margin-top: 5px;
    }
  }
</style>
