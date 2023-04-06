<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="flex items-center">
            <input
                :id="name"
                ref="checkbox"
                :value="modelValue"
                :checked="shouldBeChecked"
                type="checkbox"
                class="border-gray-300 rounded text-primary-500 focus:ring-primary-500"
                :name="name"
                v-bind="$attrs"
                :required="required"
                :disabled="disabled"
                @change="updateValue"
            >
            <label v-if="hasSlot" :for="name" class="block ml-2 text-sm text-gray-900">
                <slot />
            </label>
        </div>
    </UiLayoutInput>
</template>

<script>
import { defineComponent } from 'vue'
import isInput from '../../mixins/form/isInput'

export default defineComponent({
    mixins: [isInput],

    inheritAttrs: false,
    props: {
        modelValue: {
            type: [String, Array, Boolean],
            default: false
        },
        checkboxValue: {
            type: [String, Array, Boolean, Number],
            default: true
        }
    },

    computed: {
        shouldBeChecked () {
            if (Array.isArray(this.modelValue)) {
                return this.modelValue.includes(this.checkboxValue)
            } else {
                return this.modelValue === this.checkboxValue
            }
        }
    },

    methods: {
        updateValue (event) {
            const isChecked = event.target.checked

            if (Array.isArray(this.modelValue)) {
                const newValue = [...this.modelValue]

                if (isChecked) {
                    newValue.push(this.checkboxValue)
                } else {
                    newValue.splice(newValue.indexOf(this.checkboxValue), 1)
                }

                this.$emit('update:modelValue', newValue)
            } else {
                this.$emit('update:modelValue', isChecked)
            }
        }
    }
})
</script>
