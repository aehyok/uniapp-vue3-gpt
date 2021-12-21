<template>
  <div class="familyMemberVue">
    <!-- 数据传进来，可在《查看更多》使用中 -->
    <ul class="member-ul" v-if="props.data.length > 0">
      <li
        v-for="(item, index) in props.data"
        :key="index"
        @click="goDetail(item)"
        class="member_li"
      >
        <div class="left">
          <img
            :src="
              item.headImageUrl
                ? item.headImageUrl
                : 'https://dvs-dev.sunlight-tech.com/wechat/images/family/header.png'
            "
            alt=""
            class="leftImg"
          />
        </div>
        <div class="right">
          <text class="name">{{ item.realName }}</text>
          <p style="display: inline-block">
            &nbsp;
            <img
              class="right_sexImg"
              :src="
                item.sex == '1'
                  ? 'https://dvs-dev.sunlight-tech.com/wechat/images/family/man.png'
                  : 'https://dvs-dev.sunlight-tech.com/wechat/images/family/woman.png'
              "
              alt=""
            />
            &nbsp;
            <text
              v-if="item.relationship"
              :class="item.sex == '1' ? 'relationship' : 'relationshiping'"
            >
              {{ item.relationship }}
            </text> </p
          ><br />
          <p style="text-align: left; font-size: 12px">{{ item.mobile }}</p>
          <p style="text-align: left"
            ><text class="tag" v-for="(tag, j) in item.tagNames" :key="j">{{ tag.name }}</text></p
          >

          <!-- <div class="btn" v-if="$route.query.showTwoBtn"> -->
          <!-- <van-button  class="register-btn" round size="small" type="default" @click.stop="onJudge(item)">移除</van-button> -->
          <!-- <van-button class="register-btn" round size="small" type="default" @click.stop=" redact(item.id)">编辑</van-button> -->
          <!-- </div> -->
        </div>
      </li>
    </ul>

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
  .familyMemberVue {
    // height: 400rpx;
    background-color: #fff;
    .member-ul {
      list-style: none;
      color: #666666;
      font-size: 10px;
      li {
        display: flex;
        min-height: 62px;
        margin-bottom: 5px;
        width: 100%;
        position: relative;
        background: #fff;
        padding: 8px 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e7eb;
        .left {
          width: 75px;
          height: 75px;
          .leftImg {
            width: 100%;
            height: 100%;
          }
        }
        .right {
          padding-left: 10px;
          line-height: 20px;
          .right_sexImg {
            width: 16px;
            height: 14px;
          }
          .name {
            font-size: 18px;
            font-weight: bold;
            color: #333333;
            line-height: 31px;
          }
          .relationship {
            background: #e1eef8;
            border-radius: 5px;
            padding: 1px 8px;
            color: #0091ff;
            font-size: 10px;
            vertical-align: 16%;
          }
          .relationshiping {
            background: #ffdfdf;
            border-radius: 5px;
            padding: 1px 8px;
            color: #ff4343;
            font-size: 10px;
            vertical-align: 16%;
          }
          .tag {
            background: #edeff2;
            border: none;
            padding: 3px 6px;
            color: #909399;
            margin: 2px 5px 2px 0;
            border-radius: 10px;
            font-size: 10px;
          }
          .btn {
            height: 30px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 15px 0 0 15px;
            .register-btn {
              height: 30px;
              width: 30vw;
              border-radius: 15px;
              border: 0.5px solid rgba(96, 98, 102, 0.5);
              background-color: rgba(96, 98, 102, 0.05);
              color: rgba(48, 49, 51, 1);
              font-size: 14px;
              border-width: 0.5px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
</style>
