<template>
    <Teleport to="body">
        <div :class="{'fixed z-50':isOpen}" class="inset-0 overflow-hidden" role="dialog" aria-modal="true">
            <Transition name="modal">
                <div v-if="isOpen" class="absolute inset-0 transition-all duration-300 bg-gray-500 bg-opacity-80" aria-hidden="true" @click="close" />
            </Transition>
            <Transition name="slide">
                <div v-if="isOpen" class="fixed inset-y-0 right-0 flex max-w-full pl-10 transition-all duration-300">
                    <div class="relative z-50 w-96">
                        <div class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                            <button type="button" class="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="close">
                                <span class="sr-only">Close panel</span>
                                <XMarkIconOutline class="w-6 h-6" />
                            </button>
                        </div>
                        <!-- Slide-over panel, show/hide based on slide-over state. -->
                        <div
                            class="relative z-50 h-full overflow-y-auto bg-white"
                            :class="{
                                'p-8': !noPadding
                            }"
                        >
                            <slot />
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>

<script>
import { defineComponent } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

export default defineComponent({
    components: {
        XMarkIconOutline: XMarkIcon
    },

    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        closable: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            required: false,
            default: 'xl'
        },
        noPadding: {
            type: Boolean,
            default: false
        }
    },

    emits: ['closed', 'opened'],

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
                if (this.isOpen) {
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
})
</script>
