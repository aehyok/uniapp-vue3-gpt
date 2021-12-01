<template>
  <div class="serviceForLife">
    <div class="lifeToProduct"> 优质农场品 </div>
    <div class="convenienceOfPeople">
      <div>
        <!-- <img src="" alt=""> -->
        办事指南
      </div>
      <div> 便民查询 </div>
    </div>
  </div>
</template>
<script setup>
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
  .serviceForLife {
    display: flex;
    justify-content: space-between;
    .lifeToProduct {
      width: 49%;
      height: 300rpx;
      background-color: #fff;
    }
    .convenienceOfPeople {
      display: flex;
      width: 49%;
      flex-flow: column;
      justify-content: space-between;
      div {
        width: 100%;
        height: 48%;
        background: #fff;
      }
    }
  }
</style>
