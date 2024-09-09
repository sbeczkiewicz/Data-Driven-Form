<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

</script>

<template>
  <div class="wrapper">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <textarea :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
    <span>{{ `${props.modelValue ? props.modelValue.length : 0}/500` }}</span>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.error {
  color: red;
}
</style>
