<template>
<view :class='["flex-col", styles.page]'>
  <view :class='["flex-col", styles.group_2]'>
    <view :class='["justify-between", styles.section_1]'>
      <view :class='["flex-col", "items-center", styles["text-wrapper"]]'>
        <text>待审核</text>
      </view>
      <view :class='["flex-col", styles["text-wrapper_1"]]'>
        <text :class="[styles.text_4]">审核通过</text>
      </view>
      <view :class='["flex-col", styles["text-wrapper_2"]]'>
        <text>审核不通过</text>
      </view>
    </view>
    <view :class='["flex-col", styles.list]'>
      <view :class='[styles["list-item"], "flex-col"]' :key="i" v-for="(item, i) in list">
        <view :class='["flex-row"]'>
          <view :class='[styles["left-group"], "flex-col"]'>
            <view :class="[styles.section_3]"> </view>
            <text :class="[styles.text_6]">{{item.type}}</text>
          </view>
          <text :class="[styles.text_8]">{{item.name}}</text>
        </view>
        <text :class="[styles.text_10]">{{item.require}}</text>
        <view :class='[styles.group_4, "flex-row"]'>
          <view :class='[styles["left-text-wrapper"], "flex-col", "items-end"]'>
            <text :class="[styles.text_12]">{{item.attributes}}</text>
          </view>
          <view :class='[styles["right-text-wrapper"], "flex-col", "items-end"]'>
            <text :class="[styles.text_14]">{{item.attributes}}</text>
          </view>
        </view>
        <text :class="[styles.text_16]">{{item.address}}</text>
      </view></view
    >
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
      cover: false,
      list: [
        {
          type: '招人',
          name: '泥瓦工人',
          require: '要求：男性，20-50岁之间，每天8点到17点。',
          attributes: '全职',
          address: '工作地点：深圳市南山区深圳湾科技园',
        },
        {
          type: '求职',
          name: '泥瓦工人/电工/钳工',
          require: null,
          attributes: '全职',
          address: '工作地点：深圳市南山区深圳湾科技园',
        },
        {
          type: '招人',
          name: '泥瓦工人',
          require: '要求：男性，20-50岁之间，每天8点到17点。',
          attributes: '全职',
          address: '工作地点：深圳市南山区深圳湾科技园',
        },
      ]
    });


    const view_15OnClick = () => {
      console.log('console')
      Taro.navigateTo({ url: '/pages/home/index' });
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
      view_15OnClick
    }
  }
}
</script>

