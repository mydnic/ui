<template>
    <div class="relative input-layout">
        <label v-if="label" class="mb-1 label" :for="name">{{ label }}<sup v-if="required" class="ml-1 text-red-500">*</sup></label>
        <slot />
        <p v-if="errors && errors[name]" class="input-error" v-text="errorMessage" />
        <p v-if="help" class="mt-1 text-xs text-gray-600" v-text="help" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true
        },
        help: {
            type: String,
            required: false,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            required: false,
            default: null
        },
        errors: {
            type: Object,
            required: false,
            default: null
        }
    },

    computed: {
        errorMessage () {
            if (this.errors && this.errors[this.name]) {
                if (typeof this.errors[this.name] === 'string') {
                    return this.errors[this.name]
                } else {
                    return this.errors[this.name][0]
                }
            }
            return null
        }
    }
})
</script>
