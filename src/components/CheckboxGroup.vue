<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
  options: { type: Array, required: true, default: [] },
  showErrorAtSubmit: { type: Boolean, required: true },
  validations: { type: Array, default: [] },
  modelValue: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue', 'validate'])

const localValue = ref(props.modelValue)
const errorMessage = ref('')
const showErrorMessage = ref(false)

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue)
  showErrorMessage.value = true
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

function isChecked(value) {
  return localValue.value === value
}

function handleChange(value) {
  if (localValue.value === value) {
    localValue.value = ''
  } else {
    localValue.value = value
  }
}

onMounted(() => {
  validate()
})
</script>

<template>
  <div class="wrapper">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <div v-for="option in options">
      <input
        type="checkbox"
        :id="option"
        :value="option"
        @change="handleChange(option)"
        :checked="isChecked(option)"
      />
      <label :for="option.value">{{ option }}</label>
    </div>
    <Transition name="fade" mode="out-in">
        <span v-if="(showErrorAtSubmit || showErrorMessage) & !!errorMessage" style="margin-top: 5px;"class="error-sm">{{
        errorMessage
        }}</span>
    </Transition>
  </div>
</template>
