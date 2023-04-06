<template>
    <Transition name="modal-open">
        <div v-if="isOpen" class="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center" style="z-index: 1000 !important;">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-500 opacity-75" />
            </div>

            <div class="relative px-4 pt-5 pb-4 overflow-hidden transition-all bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6">
                <div v-if="!hasCloseButton" class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button type="button" class="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500" @click="close">
                        <XMarkIconSolid class="w-6 h-6" />
                    </button>
                </div>
                <div class="sm:flex sm:items-start">
                    <div v-if="success" class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10">
                        <CheckIconOutline class="w-6 h-6 text-green-600" />
                    </div>
                    <div v-else class="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full shrink-0 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIconOutline class="w-6 h-6 text-red-600" />
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">
                            {{ title }}
                        </h3>
                        <div class="mt-2">
                            <p class="text-sm leading-5 text-gray-500">
                                {{ message }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <span
                        v-for="button in buttons"
                        :key="button.title"
                        class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                    >
                        <button
                            type="button"
                            class="btn"
                            :disabled="button.isLoading"
                            :class="[button.class, {'loading': button.isLoading}]"
                            @click="handle(button)"
                        >
                            {{ button.title }}
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        CheckIconOutline: CheckIcon,
        ExclamationTriangleIconOutline: ExclamationTriangleIcon,
        XMarkIconSolid: XMarkIcon
    },

    data () {
        return {
            isOpen: false,
            title: undefined,
            message: undefined,
            success: false,
            buttons: []
        }
    },

    computed: {
        hasCloseButton () {
            return this.buttons.filter(button => typeof button.handler !== 'function').length > 0
        }
    },

    beforeMount () {
        this.emitter.on('hide-dialog', this.close)
        this.emitter.on('show-dialog', this.open)
    },

    beforeUnmount () {
        this.emitter.off('hide-dialog', this.close)
        this.emitter.off('show-dialog', this.open)
    },

    methods: {
        close () {
            this.stopLoading()
            this.isOpen = false
        },

        handle (button) {
            if (button.handler) {
                if (button.loadOnClick) {
                    this.buttons = this.buttons.map((b) => {
                        if (b.title === button.title) {
                            b.isLoading = true
                        }
                        return b
                    })
                }
                button.handler()
            } else {
                this.close()
            }
        },

        open (params) {
            if (params) {
                this.title = params.title
                this.message = params.message
                this.success = params.success || false
                this.buttons = params.buttons || []
            }

            this.isOpen = true
        },

        stopLoading () {
            this.buttons = this.buttons.map((b) => {
                b.isLoading = false
                return b
            })
        }
    }
}
</script>
