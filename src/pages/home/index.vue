<template>
  <div class="index">
    <!-- 轮播 与 地区简介-->
     <swiperComVue componentName="districtTopModule"/>  
     <!-- 三个模块 -->
     <threeModuleVue />
     <!-- 生活服务 -->
    <titleSlotVue title="生活服务" >
        <leftOneRightTwo />
    </titleSlotVue>
     <titleSlotVue title="村情概况" >
        <villageMoodProfileVue />
    </titleSlotVue>
    <nut-divider>以下无内容</nut-divider>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import swiperComVue from "../../components/swiperCom.vue";
import threeModuleVue from "./threeModule.vue";
import leftOneRightTwo from "../../components/leftOneRightTwo.vue";
import titleSlotVue from "../../components/titleSlot.vue";
import villageMoodProfileVue from "./villageMoodProfile.vue";
const state = reactive({
  
});


</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f3f3f3;
}

</style>
