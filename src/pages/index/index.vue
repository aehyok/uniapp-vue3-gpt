<template>
  <view class="index">
    <home v-if="current === 0"></home>
    <vr v-if="current === 1"></vr>
    <me v-if="current === 2"></me>
    <AtTabBar
      fixed
      :tabList="[
        { title: '首页', image: home_normal, selectedImage:home_selected },
        { title: 'VR全景', image: vr_normal, selectedImage:vr_selected },
        { title: '我的', image: me_normal, selectedImage:me_selected }
      ]"
      @click="handleClick"
      :current="current"
    />
  </view>
</template>

<script setup>
import { ref, defineComponent } from 'vue'
import './index.scss'
import home  from '../home/home'
import vr  from '../home/vr'
import me  from '../home/me'
import home_normal from '../../assets/images/home/home_normal.png';
import home_selected from '../../assets/images/home/home_selected.png';
import me_normal from '../../assets/images/home/me_normal.png';
import me_selected from '../../assets/images/home/me_selected.png';
import vr_normal from '../../assets/images/home/vr_normal.png';
import vr_selected from '../../assets/images/home/vr_selected.png';

const msg = ref('Hello1111 world')
const current = ref(0)

const handleClick = (item) => {
  current.value = item
}

const onSubmit = () => {
  console.log('onSubmit')
}

const onReset = () => {
  console.log('onReset')
}
</script>
