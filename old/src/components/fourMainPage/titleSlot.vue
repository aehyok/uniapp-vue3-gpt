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
    console.log('跳转过去的路由')
  }
</script>

<style lang="scss">
  .titleSlot_panel {
    padding: 0 20rpx;
    .titleSlot_head {
      margin: 30rpx 0 20rpx;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 18px;
        font-weight: 550;
        line-height: 25px;
        color: #303133;
        border-bottom: 5px solid rgba(10, 196, 150, 0.3);
        // text-decoration:underline
      }
    }
  }
</style>
