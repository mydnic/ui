<template>
    <div>
        <div class="inline cursor-pointer" @click="onOpened">
            <slot name="trigger" />
        </div>
        <UiSlideOver
            :id="id"
            :is-open="open"
            :title="title"
            :size="size"
            v-bind="$attrs"
            @opened="onOpened"
            @closed="onClosed"
        >
            <slot />
        </UiSlideOver>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import UiSlideOver from './UiSlideOver.vue'

export default defineComponent({
    components: { UiSlideOver },
    inheritAttrs: false,

    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: false,
            default: 'xl'
        }
    },

    emits: ['closed', 'opened'],

    data () {
        return {
            open: false
        }
    },

    methods: {
        openSlideOver () {
            this.open = true
        },

        onClosed () {
            this.open = false
            this.$emit('closed')
        },
        onOpened () {
            this.open = true
            this.$emit('opened')
        }
    }
})
</script>
