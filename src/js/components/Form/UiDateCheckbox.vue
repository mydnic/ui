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
import dayjs from 'dayjs'
import { defineComponent } from 'vue'
import isInput from '../../mixins/form/isInput'

export default defineComponent({
    mixins: [isInput],
    inheritAttrs: false,
    props: {
        modelValue: {
            type: [String, Boolean, Date],
            required: false,
            default: null
        },
        withTime: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        shouldBeChecked () {
            return !!this.modelValue
        }
    },

    methods: {
        updateValue (event) {
            const isChecked = event.target.checked

            const format = this.withTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'

            this.$emit('update:modelValue', isChecked ? dayjs().format(format) : null)
        }
    }
})
</script>
