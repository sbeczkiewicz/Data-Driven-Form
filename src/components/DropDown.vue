<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
  options: { type: Array, required: true, default: [] },
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const errors = computed(() => {
  const errorArray = []

  //TODO verify validation
  if (!props.modelValue) {
    errorArray.push('Intrest selection is Required')
  }
  return errorArray
})
</script>

<template>
  <div class="wrapper">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <select :value="props.modelValue" @change="emit('update:modelValue', $event.target.value)">
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
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
</style>
