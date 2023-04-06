<template>
    <div>
        <Slider
            v-bind="$attrs"
            v-model="value"
            @input="updateValue"
        />
    </div>
</template>

<script>
import Slider from '@vueform/slider'

import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Slider
    },
    inheritAttrs: false,

    props: {
        modelValue: {
            type: [Number, Array],
            required: true
        }
    },

    data () {
        return {
            value: [1, 4]
        }
    },

    created () {
        this.value = this.modelValue
    },

    methods: {
        updateValue (value) {
            this.data = value
            this.$emit('update:modelValue', value)
        }
    }
})
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style>
:root {
    --slider-connect-bg: #18d1cb;
    --slider-tooltip-bg: #18d1cb;
}
</style>
