<template>
    <div ref="wrapper" class="relative z-50 w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto">
        <div class="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
                <CondensedToast
                    v-if="template === 'condensed'"
                    :level="toast.level"
                    :title="toast.title"
                    :message="toast.message"
                    :closable="toast.closable"
                    :actions="toast.actions"
                    @close="expire"
                />
                <DefaultToast
                    v-else
                    :level="toast.level"
                    :title="toast.title"
                    :message="toast.message"
                    :closable="toast.closable"
                    :actions="toast.actions"
                    @close="expire"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CondensedToast from './templates/UiCondensedToast.vue'
import DefaultToast from './templates/UiDefaultToast.vue'

export default {
    components: {
        CondensedToast,
        DefaultToast
    },

    props: {
        toast: {
            type: Object,
            required: true
        },
        template: {
            type: String,
            default: 'default'
        },
        duration: {
            type: Number,
            default: 5000
        }
    },

    mounted () {
        setTimeout(() => {
            this.expire()
        }, this.duration)
    },

    methods: {
        expire () {
            this.emitter.emit('remove-toast', this.toast)
        }
    }
}
</script>
