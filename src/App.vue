<script setup lang="ts">
import { formSchema } from '@/config/formSchema.ts'
import {ref} from "vue";

const formData =  ref({})
</script>

<template>

  <component v-for="(field, index) in formSchema" :is="field.fieldType" :key="index" v-model=formData[field.name] v-bind="field">
  </component>

</template>

<style></style>
