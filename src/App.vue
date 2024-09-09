<script setup lang="ts">
import { formSchema } from '@/config/formSchema.ts'
import { ref } from 'vue'

const formData = ref({})

const formErrors = ref([])

const showErrorAtSubmit = ref(false)

const submitted = ref(false)

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
    alert('Form Submitted')
    submitted.value = true
  } else {
    showErrorAtSubmit.value = true
  }
}
</script>

<template>
  <div class="container">
    <header>
    <h1>Data Driven Form</h1>
  </header>

  <form v-if="!submitted"  @submit.prevent="handleSubmit">
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
  <div v-else>
    <span>{{ formData }}</span>
  </div>

  </div>
  
</template>

<style></style>
