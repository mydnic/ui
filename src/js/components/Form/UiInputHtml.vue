<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="bg-white">
            <QuillEditor
                :content="modelValue"
                content-type="html"
                theme="snow"
                :options="{
                    placeholder
                }"
                @update:content="onChange"
            />
        </div>
    </UiLayoutInput>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { defineComponent } from 'vue'
import isInput from '../../mixins/form/isInput'

export default defineComponent({
    components: {
        QuillEditor
    },
    mixins: [isInput],
    inheritAttrs: false,

    props: {
        modelValue: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: 'Écrivez ici'
        }
    },

    methods: {
        onChange (value) {
            this.$emit('update:modelValue', value)
        }
    }
})
</script>
