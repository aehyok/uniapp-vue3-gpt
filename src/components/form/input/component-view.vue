<template>
  <component
    :labelWidth="labelWidth"
    :is="column.type + 'Nutui'"
    :column="column"
    :formData="formData"
    v-model:data="formData[column.name]"
  />
</template>
<script setup>
  defineProps({
    column: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: String,
      default: '7em'
    }
  })
</script>
