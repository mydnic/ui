<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="relative">
            <fieldset>
                <legend class="sr-only">
                    {{ name }}
                </legend>
                <div class="relative z-0 -space-y-px bg-white rounded-md">
                    <label
                        v-for="(option, k) in options"
                        :key="option"
                        class="relative flex flex-col p-4 border cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
                        :class="{
                            'bg-primary-50 border-primary-200 z-10': modelValue === option,
                            'border-gray-200': modelValue !== option,
                            'rounded-tl-md rounded-tr-md': k === 0,
                            'rounded-bl-md rounded-br-md': k === options.length-1,
                        }"
                    >
                        <span class="flex items-center text-sm">
                            <input
                                type="radio"
                                :name="name"
                                :value="option"
                                class="w-4 h-4 border-gray-300 text-primary-600 focus:ring-primary-500"
                                :aria-labelledby="name + '-' + k + '-label'"
                                :aria-describedby="name + '-' + k + '-description'"
                                @input="$emit('update:modelValue', option)"
                            >
                            <span
                                :id="name + '-' + k + '-label'"
                                :class="{
                                    'text-primary-900': modelValue === option,
                                    'text-gray-900': modelValue !== option,
                                }"
                                class="ml-3 font-medium"
                            ><slot :name="option + '-label'" /></span>
                        </span>
                        <span
                            :id="name + '-' + k + '-description'"
                            class="pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-center"
                            :class="{
                                'text-primary-700': modelValue === option,
                                'text-gray-500': modelValue !== option,
                            }"
                        >
                            <span><slot :name="option + '-description-center'" /></span>
                        </span>
                        <span
                            :id="name + '-' + k + '-description-1'"
                            class="pl-1 ml-6 text-sm md:ml-0 md:pl-0 md:text-right"
                            :class="{
                                'text-primary-700': modelValue === option,
                                'text-gray-500': modelValue !== option,
                            }"
                        ><slot :name="option + '-description-right'" /></span>
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
        }
    }
})
</script>
