<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="relative">
            <fieldset>
                <legend class="sr-only">
                    {{ name }}
                </legend>
                <div class="grid" :class="[gridClass]">
                    <label
                        v-for="(option, k) in options"
                        :key="option.value"
                        class="flex items-center justify-center px-3 py-3 text-sm font-medium border rounded-md cursor-pointer sm:flex-1 focus:outline-none"
                        :class="{
                            'bg-primary-600 border-transparent text-white hover:bg-primary-700': modelValue === option.value,
                            'bg-white border-gray-200 text-gray-900 hover:bg-gray-50': modelValue !== option.value
                        }"
                    >
                        <input
                            type="radio"
                            :name="name"
                            :required="required"
                            :value="option.value"
                            class="sr-only"
                            :aria-describedby="name + '-' + k + '-description'"
                            @input="$emit('update:modelValue', option.value)"
                        >
                        <span :id="name + '-' + k + '-description'">{{ option.label }}</span>
                    </label>
                </div>
            </fieldset>
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
            type: [String, Number],
            required: false,
            default: null
        },
        options: {
            type: Array,
            required: true
        },
        gridClass: {
            type: String,
            default: 'grid-cols-3 gap-3 sm:grid-cols-6'
        }
    }
})
</script>
