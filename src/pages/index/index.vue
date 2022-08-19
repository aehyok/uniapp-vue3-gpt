<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from "vue";
import "./index.scss";

export default {
  setup() {
    const msg = ref("Hello world");

    let c = 1;
    let d = 111;
    console.log(c);
    return {
      msg
    };
  }
};
</script>
