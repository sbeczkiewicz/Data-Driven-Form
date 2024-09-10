<script setup lang="ts">
import { formSchema } from '@/config/formSchema.ts'
import { ref, watch, computed } from 'vue'
import { useFormStore } from '@/stores/formStore'
import SubmitedDisplay from '@/components/SubmittedDisplay.vue'

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
    submitted.value = true
  } else {
    showErrorAtSubmit.value = true
  }
}

// Centralized State Management
const formStore = useFormStore()

const formData = computed(() => formStore.formData)

watch(
  formData,
  (newData, oldData) => {
    if (JSON.stringify(newData) !== JSON.stringify(oldData)) {
      formStore.saveStateToStorage()
    }
  },
  { deep: true }
)
</script>

<template>
  <div class="container">
    <header>
      <h1>Data Driven Form</h1>
    </header>

    <form v-if="!submitted" @submit.prevent="handleSubmit">
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
      <hr/>
      <button style="float: right;" type="submit">Submit</button>
    </form>
    <SubmitedDisplay v-else></SubmitedDisplay>
  </div>
</template>

<style>
hr {
  border: 0;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}
</style>
