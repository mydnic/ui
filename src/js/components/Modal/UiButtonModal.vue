<template>
    <div>
        <div class="inline cursor-pointer" @click="openModal">
            <slot name="trigger" />
        </div>
        <UiModal
            v-bind="$attrs"
            :id="id"
            :opened="open"
            :size="size"
            @opened="onOpened"
            @closed="onClosed"
        >
            <slot />
        </UiModal>
    </div>
</template>

<script>
import UiModal from './UiModal.vue'

export default {
    components: {
        UiModal
    },

    inheritAttrs: false,
    props: {
        id: {
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
        openModal () {
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
}
</script>
