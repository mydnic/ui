<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="relative">
            <div v-if="hasIconSlot" class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
                <slot name="icon" />
            </div>
            <input
                :id="name"
                :name="name"
                :type="type"
                class="input"
                :class="{'border-red-400': errors && errors[name], 'pl-10':hasIconSlot}"
                :value="modelValue"
                v-bind="$attrs"
                :required="required"
                :disabled="disabled"
                ref="input"
                @input="onChange"
            >
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
        type: {
            type: String,
            default: 'text'
        },
        modelValue: {
            type: [String, Number],
            required: false,
            default: null
        }
    },

    methods: {
        onChange (e) {
            this.$emit('update:modelValue', e.target.value)
        },
        focus() {
            this.$refs.input.focus()
        }
    }
})
</script>
