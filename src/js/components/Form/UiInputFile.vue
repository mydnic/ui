<template>
    <UiLayoutInput v-bind="layoutProps">
        <label :for="name" class="relative max-w-full cursor-pointer">
            <div
                class="max-w-full btn"
                :class="{
                    'bg-gray-500 opacity-75': disabled
                }"
            >
                <ArrowUpTrayIconOutline class="w-5 h-5 -ml-2 shrink-0" />

                <span class="ml-2 text-left truncate">{{ text || 'Sélectionner ' + (multiple ? 'des fichiers' : 'un fichier') }}</span>
            </div>
            <input
                :id="name"
                :name="name"
                :accept="accept"
                class="hidden"
                type="file"
                :required="required"
                v-bind="$attrs"
                @change="onFileChange"
            >
        </label>
    </UiLayoutInput>
</template>

<script>
import { defineComponent } from 'vue'
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import isInput from '../../mixins/form/isInput'

export default defineComponent({
    components: {
        ArrowUpTrayIconOutline: ArrowUpTrayIcon
    },

    mixins: [isInput],
    inheritAttrs: false,

    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        accept: {
            type: String,
            default: '*'
        }
    },

    data () {
        return {
            text: undefined
        }
    },

    created () {
        if (this.modelValue) {
            this.text = this.modelValue
        }
    },

    methods: {
        onFileChange (event) {
            if (this.multiple) {
                this.text = event.target.files[0].name
                this.$emit('update:modelValue', event.target.files)
            } else {
                this.text = event.target.files[0] ? event.target.files[0].name : null
                this.$emit('update:modelValue', event.target.files[0])
            }
        }
    }
})
</script>
