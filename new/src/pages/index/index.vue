<template>
<view :class='["flex-col", styles.page]'>
  <view :class='["flex-col", styles.group]'>
    <view :class='["justify-between", styles.section_1]'>
      <text :class="[styles.text]"></text>
      <text :class="[styles.text_1]">首页</text>
      <image
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921343652286819.png"
        :class="[styles.image]"
      />
    </view>
    <view :class='["flex-col", styles.group_1]'>
      <view :class='["flex-col", styles.section_2]'>
        <view :class="[styles.grid]">
          <view  @tap="view_15OnClick" :class='["flex-col", styles["grid-item"]]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921349069668316.png"
              :class="[styles.image_1]"
            />
            <text :class="[styles.text_2]">农技达人</text>
          </view>
          <view @tap="view_16OnClick"  :class='["flex-col", styles["grid-item_1"]]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921349772519528.png"
              :class="[styles.image_2]"
            />
            <text :class="[styles.text_3]">民意调查</text>
          </view>
          <view :class='["flex-col", "items-center", styles["grid-item_2"]]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921350755701626.png"
              :class="[styles.image_3]"
            />
            <text :class="[styles.text_4]">随手拍</text>
          </view>
          <view :class='[styles["grid-item_3"], "flex-col"]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921351714154979.png"
              :class="[styles.image_4]"
            />
            <text :class="[styles.text_5]">基层党建</text>
          </view>
          <view :class='[styles["grid-item_3"], "flex-col"]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921352505951111.png"
              :class="[styles.image_5]"
            />
            <text :class="[styles.text_6]">三务公开</text>
          </view>
          <view :class='["flex-col", "items-center", styles["grid-item_4"]]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921353611532069.png"
              :class="[styles.image_6]"
            />
            <text :class="[styles.text_7]">劳务信息</text>
          </view>
        </view>
      </view>
      <view @tap="view_9OnClick" :class='["flex-col", "items-center", styles["image-wrapper"]]'>
        <image
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921359885826516.png"
          :class="[styles.image_7]"
        />
      </view>
    </view>
    <view :class="[styles.group_4]">
      <view :class='["flex-col", styles.section_3]'>
        <text :class="[styles.text_8]">最新动态</text>
        <view :class='["flex-col", styles.group_5]'>
          <view :class='["flex-col", "items-center", styles.group_6]'>
            <image
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921354492186310.png"
              :class="[styles.image_8]"
            />
            <text :class="[styles.text_9]">暂无村民发布动态</text>
          </view>
          <view :class='["flex-col", "items-center", styles.button]'>
            <text>我要发布</text>
          </view>
        </view>
      </view>
      <view :class='["flex-col", styles["text-wrapper"]]'>
        <text :class="[styles.text_11]">入驻家乡</text>
      </view>
      <view :class='["flex-col", "items-center", styles["image-wrapper_1"]]'>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921345189018212.png"
          :class="[styles.image_9]"
        />
      </view>
      <text :class="[styles.text_12]">看看乡亲们都在聊啥</text>
    </view>
  </view>
  <view :class='["justify-center", styles.footer]'>
    <view :class='["flex-col", styles.group_7]'>
      <image
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921364655179517.png"
        :class="[styles.image_10]"
      />
      <text>首页</text>
    </view>
    <view :class='["flex-col", styles.group_8]'>
      <image
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921364664291683.png"
        :class="[styles.image_10]"
      />
      <text :class="[styles.text_14]">消息</text>
    </view>
    <view :class='["flex-col", "items-center", styles.group_9]'>
      <image
        src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448921364664391445.png"
        :class="[styles.image_10]"
      />
      <text>个人中心</text>
    </view>
  </view>
</view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';
import styles from './index.module.scss'
export default {
  name: 'Index',
  components: {
    
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const view_15OnClick = () => {
      console.log('console')
      Taro.navigateTo({ url: '/pages/home/index' });
    };

    const view_16OnClick = () => {
      console.log('console')
      Taro.navigateTo({ url: '/pages/list/index' });
    };


    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick,
      styles,
      view_15OnClick,
      view_16OnClick
    }
  }
}
</script>

