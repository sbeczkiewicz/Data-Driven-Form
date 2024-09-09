<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
  modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const checkDigit = (event: KeyboardEvent) => {
  if (event.key.length === 1 && isNaN(Number(event.key))) {
    event.preventDefault()
  }
}
</script>

<template>
  <div class="wrapper">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <input
      :value="modelValue"
      type="number"
      @keydown="checkDigit"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

