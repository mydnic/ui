<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="flex items-center">
            <span
                class="w-8 h-8 mr-3 overflow-hidden bg-gray-200 bg-center bg-cover rounded-full shrink-0"
                :style="{
                    'background-image': image ? 'url('+image+')' : 'none'
                }"
            >
                <svg v-if="!image" class="w-full h-full text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
            <div class="min-w-0">
                <UiInputFile
                    accept="image/png, image/jpeg"
                    :name="name"
                    :required="required"
                    @input="onFileChange"
                />
            </div>
        </div>
    </UiLayoutInput>
</template>

<script>
import { defineComponent } from 'vue'
import isInput from '../../mixins/form/isInput'
import UiInputFile from './UiInputFile.vue'

export default defineComponent({
    components: { UiInputFile },
    mixins: [isInput],

    props: {
        modelValue: {
            type: [File, Object, String],
            default: null
        }
    },

    data () {
        return {
            image: undefined
        }
    },

    created () {
        if (this.modelValue) {
            this.image = this.modelValue
        }
    },

    methods: {
        onFileChange (event) {
            const [file] = event.target.files
            if (file) {
                this.image = URL.createObjectURL(file)
            }
            this.$emit('update:modelValue', file)
        }
    }
})
</script>
