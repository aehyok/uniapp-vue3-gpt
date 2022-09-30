<!--简单文本框-->
<template>
  <nut-form-item
    :label="column.title + '：'"
    :prop="column.name"
    :required="column.required"
    :rules="rules"
  >
    <nut-radiogroup v-model="value" direction="horizontal">
      <nut-radio
        shape="round"
        icon-name="checklist"
        icon-active-name="checklist"
        :label="item.code"
        @click="dyDeselect(item.code)"
        v-for="item in columns"
        :key="item.code"
        >{{ item.name }}</nut-radio
      >
    </nut-radiogroup>
  </nut-form-item>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue'

  const emit = defineEmits(['update:data'])
  const props = defineProps({
    column: {
      type: [Object],
      default: () => {}
    },
    data: {
      type: [Number, String],
      default: ''
    }
  })
  const { column } = props
  console.log(column, 'update:data')
  const required = ref(false)
  required.value = column.required

  const rules: any = ref([])
  const placeholder = column.placeholder ? column.placeholder : `请输入${column.title}`

  if (required.value) {
    rules.value = [
      {
        required: column.required,
        message: placeholder,
        trigger: ['blur', 'change']
      }
    ]
  }

  // 验证
  if (column && column.rules) {
    console.log(rules, column.rules, 'column.rules-----------')

    rules.value = [...rules.value, ...column.rules]
  }

  let columns: any = ref([])
  if (column && column.dictionary && column.dictionary instanceof Array) {
    columns.value = column.dictionary
  }
  console.log(rules.value, 'column.rules-----------')
  const value = computed({
    get() {
      return props.data
    },
    set(val) {
      emit('update:data', val)
    }
  })

  const dyDeselect = (item: any) => {
    console.log(item, 'item.dictionary-----------')
  }
</script>
<style lang="scss">
  .nut-form-item__body__tips {
    font-size: 11px;
  }

  .nut-input.nut-input-border {
    border-bottom: 0;
  }
  .nut-input {
    padding: 0px;
  }
  .input-text {
    color: #000;
  }
  .nut-form-item__label required {
    position: relative;
  }
  .nut-form-item__label.required::before {
    position: absolute;
    left: 6px;
  }
</style>
