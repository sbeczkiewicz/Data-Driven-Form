<script setup lang="ts">
import { computed, watch, ref } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
  options: { type: Array, required: true, default: [] },
  modelValue: { type: Array, default: [] }
})

const emit = defineEmits(['update:modelValue'])

const selectedValues = ref(props.modelValue || [])

watch(selectedValues, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="wrapper">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <div v-for="option in options">
      <input type="checkbox" :id="option" :value="option" v-model="selectedValues" />
      <label :for="option.value">{{ option }}</label>
    </div>
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
