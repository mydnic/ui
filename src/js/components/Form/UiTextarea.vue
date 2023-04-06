<template>
    <UiLayoutInput v-bind="layoutProps">
        <textarea
            class="input"
            :value="modelValue"
            :rows="rows"
            :class="{
                'border-red-400': errors && errors[name],
            }"
            v-bind="$attrs"
            :required="required"
            :disabled="disabled"
            :aria-describedby="errors && errors[name] ? name+'-error' : help ? name+'-description' : null"
            :aria-invalid="errors && errors[name]"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </UiLayoutInput>
</template>

<script>
import { defineComponent } from 'vue'
import isInput from '../../mixins/form/isInput'

export default defineComponent({
    mixins: [isInput],
    inheritAttrs: false,

    props: {
        rows: {
            type: [String, Number],
            default: 4
        },
        modelValue: {
            type: String,
            required: false,
            default: null
        }
    }
})
</script>
