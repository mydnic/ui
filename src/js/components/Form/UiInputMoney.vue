<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="relative">
            <div v-if="hasIconSlot" class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
                <slot name="icon" />
            </div>
            <input
                ref="inputRef"
                type="text"
                :disabled="disabled"
                :name="name"
                v-bind="$attrs"
                class="input"
                :required="required"
            >
        </div>
    </UiLayoutInput>
</template>

<script>
import { useCurrencyInput } from 'vue-currency-input'
import { watch, defineComponent } from 'vue'
import isInput from '../../mixins/form/isInput'

export default defineComponent({
    mixins: [isInput],

    props: {
        modelValue: {
            type: Number,
            required: false,
            default: null
        }
    },

    setup (props) {
        const { inputRef, setOptions, setValue } = useCurrencyInput({
            currency: 'EUR',
            locale: 'fr',
            valueScaling: 'precision'
        })

        watch(
            () => props.modelValue,
            (value) => {
                setValue(value)
            }
        )

        watch(
            () => props.options,
            (options) => {
                setOptions(options)
            }
        )

        return { inputRef }
    }

})
</script>
