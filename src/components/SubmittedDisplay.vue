<script setup>
import { computed } from 'vue'
import { useFormStore } from '@/stores/formStore'

// Access submitted data from central state
const formStore = useFormStore()
const formData = computed(() => formStore.formData)

//Convert camelCase key to nicer format
function formatCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str[0].toUpperCase())
}
</script>

<template>
  <div class="display-container">
    <div v-for="(value, key) in formData" :key="key" class="display-item">
      <div class="item-key">{{ formatCamelCase(key) }}:</div>
      <div class="item-value" :title="value">{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>
.display-container {
  float: left;
  gap: 12px;
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 16px auto;
}

.display-item {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  width: 380px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.display-item:last-child {
  border-bottom: none;
}

.item-key {
  font-weight: bold;
  color: #333;
  padding-right: 5px;
}

.item-value {
  color: #555;
}
</style>
