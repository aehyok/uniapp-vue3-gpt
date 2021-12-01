<template>
  <div class="villageMoodProfile">
    <div v-for="(item, index) in 3" class="forVillageMoodProfile">
      <div class="villageMoodProfileImg">
        <img src="" alt="" />
        <p>图片</p>
      </div>
      <div class="villageMoodProfileInfo">
        <p>天溪村</p>
        <p>陕西省咸阳市杨陵区田西大道8号</p>
        <!-- <div class="swiper_module_body">
                <itemDataVue  v-for="(item,index) in list" :data="item"/>  
              </div>  -->
      </div>
    </div>
  </div>
</template>
<script setup>
  // import itemDataVue from "../../components/itemData.vue";
  import { ref } from 'vue'
  const list = ref([
    {
      name: '村庄数',
      num: 3654120
    },
    {
      name: '村民数',
      num: 55
    },
    {
      name: '党员树',
      num: 651421
    }
  ])
</script>
<style lang="scss">
  .villageMoodProfile {
    background-color: #fff;
    padding: 0 20rpx;
    height: 300px;
    .forVillageMoodProfile {
      display: flex;
      align-items: center;
      height: 180rpx;
      .villageMoodProfileImg {
        width: 25%;
      }
      .villageMoodProfileInfo {
        width: 75%;
      }
    }
  }
</style>
