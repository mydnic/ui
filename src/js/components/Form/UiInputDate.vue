<template>
    <UiLayoutInput v-bind="layoutProps">
        <input
            :id="name"
            :name="name"
            :value="formattedValue"
            :type="month ? 'month' : withTime ? 'datetime-local' : 'date'"
            class="input"
            v-bind="$attrs"
            :required="required"
            :disabled="disabled"
            @input="updateValue"
        >
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
            type: [String, Object],
            default: null
        },
        month: {
            type: Boolean,
            default: false
        },
        withTime: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        formattedValue () {
            const dateObject = dayjs(this.modelValue)

            if (dateObject.isValid()) {
                if (this.withTime) {
                    return dayjs(this.modelValue).format('YYYY-MM-DDTHH:mm')
                } else if (this.month) {
                    return dayjs(this.modelValue).format('YYYY-MM')
                } else {
                    return dayjs(this.modelValue).format('YYYY-MM-DD')
                }
            }

            return this.modelValue
        }
    },

    methods: {
        updateValue (event) {
            if (this.withTime) {
                this.$emit('update:modelValue', dayjs(event.target.value).format('YYYY-MM-DD HH:mm:ss'))
            } else if (this.month) {
                this.$emit('update:modelValue', dayjs(event.target.value).format('YYYY-MM'))
            } else {
                if (event.target.value.split('-')[0].startsWith('0')) {
                    return this.modelValue
                }
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
})
</script>
