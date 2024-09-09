<script setup lang="ts">
    import { computed } from 'vue'
    const props = defineProps({
        name: { type: String, required: true },
        label: { type: String, required: true },
        required: { type: Boolean, required: true },
        modelValue: String
    })

    const emit = defineEmits(['update:modelValue'])

    const errors = computed(()=> {
        const errorArray = []
        console.log(props.modelValue)
        if (!props.modelValue || props.modelValue?.length < 3) {
            errorArray.push('Full Name must be at least 3 characters')
        }
        if (!props.modelValue) {
            errorArray.push('Full Name is Required')
        }
        return errorArray
    })
</script>

<template>
    <div class="wrapper">
        <label>{{`${props.required ? '*' : ''} ${props.label}`}}</label>
        <input :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"> </input> 
        <span v-for="error in errors" class="error">{{ error }}</span>
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
    .error {
        color: red
    }  

</style>