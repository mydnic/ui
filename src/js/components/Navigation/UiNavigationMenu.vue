<template>
    <nav
        class="shadow"
        :class="{
            'bg-gray-800 dark-nav': dark,
            'bg-white': !dark
        }"
    >
        <div
            class="px-2 mx-auto sm:px-4 lg:px-8"
            :class="{
                'max-w-7xl': !fullWidth
            }"
        >
            <div class="flex justify-between h-16" :class="{'items-center': dark}">
                <div class="flex px-2 lg:px-0">
                    <div class="flex items-center flex-shrink-0">
                        <slot name="logo" />
                    </div>
                    <div
                        class="hidden lg:ml-6 lg:flex"
                        :class="{
                            'desktop-navigation-default lg:space-x-8': !dark,
                            'desktop-navigation-dark space-x-4': dark,
                        }"
                    >
                        <slot name="links" />
                    </div>
                </div>
                <div class="flex items-center lg:hidden">
                    <button
                        class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        @click="toggleMobileMenu"
                    >
                        <span class="sr-only">Open main menu</span>
                        <Bars3IconOutline v-if="!mobileMenuOpen" class="block w-6 h-6" aria-hidden="true" />
                        <XMarkIconOutline v-else class="block w-6 h-6" aria-hidden="true" />
                    </button>
                </div>

                <div class="hidden lg:ml-4 lg:flex lg:items-center">
                    <slot name="right" />
                </div>
            </div>
        </div>

        <Transition>
            <div v-if="mobileMenuOpen" class="lg:hidden">
                <div
                    class="pt-2 pb-3 space-y-1"
                    :class="{
                        'mobile-navigation-default': !dark,
                        'mobile-navigation-dark': dark,
                    }"
                >
                    <slot name="links" />
                </div>
                <div class="pt-4 pb-3 border-t border-gray-200">
                    <slot name="mobile-bottom" />
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
    components: {
        Bars3IconOutline: Bars3Icon,
        XMarkIconOutline: XMarkIcon
    },

    props: {
        fullWidth: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            mobileMenuOpen: false
        }
    },

    methods: {
        toggleMobileMenu () {
            this.mobileMenuOpen = !this.mobileMenuOpen

            this.mobileMenuOpen ? this.$emit('open') : this.$emit('close')
        }
    }
}
</script>
