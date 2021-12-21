<template>
  <div>
    <text :style="data.numStyle">{{ data.num }}</text
    ><br />
    <text :style="data.nameStyle">{{ data.name }}</text>
  </div>
</template>
<script setup>
  const props = defineProps({
    data: {
      type: Object,
      default: () => {}
    }
  })
</script>
