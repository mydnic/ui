<template>
    <TransitionGroup
        name="list"
        tag="div"
        class="fixed inset-0 z-50 flex flex-col items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-start"
    >
        <BaseToast
            v-for="toast in toasts"
            :key="toast.id"
            class="mb-4 transition-all duration-200 ease-linear"
            :toast="toast"
            :level="toast.level"
            :template="toast.template"
            :actions="toast.actions"
            :duration="toast.duration"
        />
    </TransitionGroup>
</template>

<script>
import BaseToast from './UiBaseToast.vue'

export default {
    components: {
        BaseToast
    },
    data () {
        return {
            toasts: []
        }
    },

    beforeMount () {
        this.registerEvents()
    },

    beforeUnmount () {
        this.unRegisterEvents()
    },

    methods: {
        registerEvents () {
            this.emitter.on('toast', this.addToast)
            this.emitter.on('remove-toast', this.removeToast)
        },
        unRegisterEvents () {
            this.emitter.off('toast', this.addToast)
            this.emitter.off('remove-toast', this.removeToast)
        },

        addToast (parameters) {
            parameters.id = Math.random().toString(36)
            this.toasts.push(parameters)
        },

        removeToast (toast) {
            this.toasts.splice(this.toasts.indexOf(toast), 1)
        }
    }
}
</script>
