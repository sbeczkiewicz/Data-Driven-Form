<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
  required: { type: Boolean, required: true },
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
  validateAndShowMessage()
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

function validateAndShowMessage() {
    validate()
    showErrorMessage.value = true
}

onMounted(() => {
  validate()
})
</script>

<template>
  <div class="wrapper width-md">
    <label>{{ `${props.required ? '*' : ''} ${props.label}` }}</label>
    <input type='text' @blur="validateAndShowMessage" v-model="localValue" />
    <Transition name="fade" mode="out-in">
        <span v-if="(showErrorAtSubmit || showErrorMessage) & !!errorMessage" class="error-sm">{{
        errorMessage
        }}</span>
    </Transition>
  </div>
</template>
