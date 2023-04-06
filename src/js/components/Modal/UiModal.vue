<template>
    <Teleport to="body">
        <Transition name="modal">
            <div
                v-if="opened"
                :id="id"
                class="fixed top-0 bottom-0 left-0 right-0 z-40 flex flex-col w-full overflow-auto transition-all duration-300 modal"
                :class="{
                    'px-4 py-6':!borderless,
                    'justify-center': centered
                }"
            >
                <div class="max-h-full">
                    <div
                        class="relative z-50 w-full mx-auto"
                        :class="{
                            'sm:max-w-lg': size === 'lg',
                            'sm:max-w-xl': size === 'xl',
                            'sm:max-w-2xl': size === '2xl',
                            'sm:max-w-3xl': size === '3xl',
                            'sm:max-w-4xl': size === '4xl',
                            'sm:max-w-5xl': size === '5xl',
                            'sm:max-w-6xl': size === '6xl',
                            'sm:max-w-7xl': size === '7xl',
                            'bg-white shadow-xl sm:w-full': !noBackground,
                            'px-4 pt-5 pb-4 sm:p-8 rounded-lg':!borderless
                        }"
                    >
                        <div v-if="closable" class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                            <button
                                type="button"
                                class="transition duration-150 ease-in-out hover:text-slate-500 focus:outline-none focus:text-slate-500"
                                aria-label="Close"
                                :class="{
                                    'text-white': noBackground,
                                    'text-slate-400': !noBackground
                                }"
                                @click="close"
                            >
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div :class="{'mt-2': noBackground}">
                            <slot />
                        </div>
                    </div>
                </div>
                <div class="fixed inset-0 transition-opacity opacity-75 bg-slate-500">
                    <div v-if="closable" class="absolute inset-0" @click="close" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
export default {
    props: {
        opened: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            required: true
        },
        closable: {
            type: Boolean,
            default: true
        },
        noBackground: {
            type: Boolean,
            default: false
        },
        borderless: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            required: false,
            default: 'xl'
        },
        centered: {
            type: Boolean,
            default: true
        }
    },

    emits: ['closed', 'opened'],

    beforeMount () {
        this.emitter.on('modal-close-all', this.close)
    },

    beforeUnmount () {
        this.emitter.off('modal-close-all', this.close)
    },

    methods: {
        close () {
            this.$emit('closed')
        },

        open () {
            this.$emit('opened')
        },

        handle (button) {
            if (button.handler) {
                button.handler()
            } else {
                this.close()
            }
        },

        handleToggleEvent (name, params) {
            if (name === this.id) {
                if (this.opened) {
                    this.close()
                } else {
                    this.open()
                }
            }
        },

        handleClose (name, params) {
            if (name === this.id) {
                this.close()
            }
        },

        handleOpen (name, params) {
            if (name === this.id) {
                this.open()
            }
        }
    }
}
</script>
