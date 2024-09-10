import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({
    formData: {}
  }),
  actions: {
    updateFormData(newData: any) {
      this.formData = { ...this.formData, ...newData }
    }
  }
})
