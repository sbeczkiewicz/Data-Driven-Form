<script setup lang="ts">
import { watch, ref } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
  validations: { type: Array, default: () => [] },
  modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue', 'validate'])

const localValue = ref(props.modelValue)

//Field Validation
const errorMessage = ref('')

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
  validate()
})

function validate() {
  errorMessage.value = ''
  for (const validation of props.validations) {
    const result = validation(props.label, localValue.value)
    if (result) {
      errorMessage.value = result
      break
    }
  }
  emit('validate', errorMessage.value)
}
</script>

<template>
  <div class="wrapper width-lg">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <textarea style="resize: vertical; height: 100px" v-model="localValue" @blur="validate" />
    <span :title="errorMessage" :class="errorMessage ? 'error counter' : 'counter'">{{
      `${props.modelValue ? props.modelValue.length : 0}/500`
    }}</span>
  </div>
</template>

<style scoped>
.counter {
  text-align: right;
}
</style>
