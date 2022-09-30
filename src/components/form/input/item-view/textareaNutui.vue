<template>
  <nut-form-item
    :label="column.title + '：'"
    :prop="column.name"
    :required="column.required"
    :rules="rules"
  >
    <nut-input
      type="textarea"
      v-model="value"
      :placeholder="placeholder"
      :max-length="column.maxlength"
      :readonly="column.readonly"
      :input-align="column.inputAlign ?? 'left'"
      :error-message-align="column.inputAlign ?? 'left'"
      :rows="rows"
    >
    </nut-input>
  </nut-form-item>
</template>

<script setup>
  import { computed, ref } from 'vue'

  const emit = defineEmits(['update:data'])
  const props = defineProps({
    column: {
      type: [Object],
      default: () => {}
    },
    data: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: '7em'
    }
  })
  const { column } = props
  const rows = column.rows > 0 ? column.rows : 3
  const rules = ref([])
  const placeholder = column.placeholder ? column.placeholder : `请输入${column.title}`
  const required = ref(false)
  required.value = column.required

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

  const value = computed({
    get() {
      return props.data
    },
    set(val) {
      console.log('text----------area', val)
      emit('update:data', val)
    }
  })
</script>
