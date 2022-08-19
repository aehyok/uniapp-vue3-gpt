<template>
  <view class="index">
    <CustomWrapper>
      <text>{{ msg }}</text>
    </CustomWrapper>
  </view>
</template>

<script>
  import { ref } from 'vue'
  // import { CustomWrapper } from '@tarojs/components'
  import './index.scss'

  export default {
    setup() {
      const msg = ref('Hello world')

      const c = '1'
      const d = '111'
      if (c === 1) console.log(c)
      return {
        msg,
        d
      }
    }
  }
</script>
