<template>
<view :class='["flex-col", styles.page]'>
  <view :class='["flex-col", styles.group_1]'>
    <view :class='["flex-col", styles.section_1]'>
      <text :class="[styles.text_2]">应急发布</text>
      <view :class="[styles.grid]">
        <view :class='["flex-col", "items-center", styles["grid-item"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963573879541213.png"
            :class="[styles.image_1]"
          />
          <text :class="[styles.text_3]">弹窗消息</text>
        </view>
        <view :class='["flex-col", "items-center", styles["grid-item_1"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963574718905808.png"
            :class="[styles.image_2]"
          />
          <text :class="[styles.text_4]">滚动消息</text>
        </view>
        <view :class='["flex-col", "items-center", styles["grid-item_2"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963575365656879.png"
            :class="[styles.image_3]"
          />
          <text :class="[styles.text_5]">开机画面</text>
        </view>
        <view :class='["flex-col", styles["grid-item_3"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963576150515533.png"
            :class="[styles.image_4]"
          />
          <text :class="[styles.text_6]">霸屏消息</text>
        </view>
        <view :class='["flex-col", "items-center", styles["grid-item_4"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963577110753312.png"
            :class="[styles.image_5]"
          />
          <text :class="[styles.text_7]">大喇叭</text>
        </view>
      </view>
    </view>
    <view :class='["flex-col", styles.section_2]'>
      <view :class='["flex-row", styles.group_2]'>
        <text :class="[styles.text_8]">栏目内容管理</text>
        <text :class="[styles.text_9]">(发布民调栏目,请先到民调题库中创建题目)</text>
      </view>
      <view :class='["flex-row", styles.group_3]'>
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963578776155538.png"
          :class="[styles.image_6]"
        />
        <image
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963578063216139.png"
          :class="[styles.image_7]"
        />
      </view>
      <view :class='["flex-row", styles.group_4]'>
        <text>栏目内容发布</text>
        <text :class="[styles.text_11]">民调题库</text>
      </view>
    </view>
    <view :class='["flex-col", styles.section_3]'>
      <text :class="[styles.text_12]">公众号发布信息管理</text>
      <view :class='["flex-row", styles["equal-division"]]'>
        <view :class='[styles["equal-division-item"], "flex-col", "items-center"]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963581518807863.png"
            :class="[styles.image_8]"
          />
          <text :class="[styles.text_13]">随手拍管理</text>
        </view>
        <view :class='["flex-col", "items-center", styles["equal-division-item_1"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963582146379267.png"
            :class="[styles.image_9]"
          />
          <text :class="[styles.text_14]">村友圈内容</text>
        </view>
        <view :class='[styles["equal-division-item"], "flex-col", "items-center"]'>
          <image
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963594280120773.png"
            :class="[styles.image_11]"
          />
          <text :class="[styles.text_15]">劳工信息管理</text>
        </view>
      </view>
    </view>
    <view :class='["flex-col", styles.section_4]'>
      <text :class="[styles.text_16]">四情监测</text>
      <view :class='["flex-row", styles["equal-division_1"]]'>
        <view :class='["flex-col", "items-center", styles["equal-division-item_2"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963583152778297.png"
            :class="[styles.image_12]"
          />
          <text :class="[styles.text_17]">墒情</text>
        </view>
        <view :class='["flex-col", "items-center", styles["equal-division-item_3"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963583776183474.png"
            :class="[styles.image_13]"
          />
          <text :class="[styles.text_18]">虫情</text>
        </view>
        <view :class='["flex-col", "items-center", styles["equal-division-item_4"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963584395804619.png"
            :class="[styles.image_9]"
          />
          <text :class="[styles.text_19]">苗情</text>
        </view>
        <view :class='["flex-col", "items-center", styles["equal-division-item_5"]]'>
          <image
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963585267577235.png"
            :class="[styles.image_15]"
          />
          <text :class="[styles.text_20]">灾情</text>
        </view>
      </view>
    </view>
    <image
      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620affa35a7e3f0310d06a2d/620b0f8262a7d90011fe0484/16448963589837034298.png"
      :class="[styles.image_16]"
    />
  </view>
</view>
</template>

<script>
import { reactive, toRefs } from 'vue';
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

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick,
      styles
    }
  }
}
</script>

