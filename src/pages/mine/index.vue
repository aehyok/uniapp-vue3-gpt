<template>
  <div class="title">222</div>
</template>

<script setup>
import { reactive } from "vue";
// import swiperComVue  from "../../components/swiperCom.vue";
const state = reactive({
  msg: "欢迎使用 NutUI3.0 开发小程序",
  msg2: "你成功了～",
  type: "text",
  show: false,
  cover: false,
});

const handleClick = (type, msg, cover = false) => {
  state.show = true;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
