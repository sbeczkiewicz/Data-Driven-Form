<script setup lang="ts">
import { formSchema } from '@/config/formSchema.ts'
import { ref } from 'vue'

const formData = ref({})

const formErrors = ref([])

const showErrorAtSubmit = ref(false)

function handleValidation(field, error) {
  if (error) {
    formErrors.value.push(`${field}: ${error}`)
  } else {
    formErrors.value = formErrors.value.filter((e) => !e.startsWith(`${field}:`))
  }
}

function handleSubmit() {
  if (formErrors.value.length === 0) {
    // Submit form
    // change to other view
    alert('Form Submitted')
  } else {
    showErrorAtSubmit.value = true
    alert('Errors!')
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <component
      v-for="(field, index) in formSchema"
      :is="field.fieldType"
      :key="index"
      v-model="formData[field.name]"
      v-bind="field"
      :showErrorAtSubmit="showErrorAtSubmit"
      @validate="handleValidation(field.name, $event)"
    >
    </component>
    <button type="submit">Submit</button>
  </form>

  <span>{{ formData }}</span>
</template>

<style></style>
