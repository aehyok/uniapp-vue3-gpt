<template>
  <div class="titleSlot_panel">
    <div class="titleSlot_head">
      <div class="title">{{ props.title }}</div>

      <div class="more" v-if="!!props.to" @click="goto">更多</div>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  })
  const goto = () => {
    // console.log(this.to,'跳转过去的路由');
  }
</script>

<style lang="scss">
  .titleSlot_panel {
    padding: 0 30rpx;
    .titleSlot_head {
      margin: 10rpx 0;
      display: flex;
      justify-content: space-between;
      .title {
      }
    }
  }
</style>
