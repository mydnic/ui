<template>
    <div ref="dropdownMenu">
        <span @click="toggleDropdown">
            <slot name="trigger" />
        </span>
        <Transition
            :name="transition"
            @before-enter="collapse"
            @enter="expandHeight"
            @before-leave="expandHeight"
            @leave="collapse"
        >
            <slot v-if="isDropdownOpen" name="content" />
        </Transition>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        transition: {
            type: String,
            default: 'slide-y'
        },
        expand: {
            type: Boolean,
            default: false
        },
        openOnMount: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        closeOnClickOutside: {
            type: Boolean,
            default: true
        }
    },

    data () {
        return {
            isDropdownOpen: false
        }
    },

    mounted () {
        if (this.closeOnClickOutside) {
            window.addEventListener('click', this.documentClick)
        }
        if (this.openOnMount) {
            this.open()
        }
    },

    beforeUnmount () {
        if (this.closeOnClickOutside) {
            window.removeEventListener('click', this.documentClick)
        }
    },

    methods: {
        toggleDropdown () {
            if (this.disabled) {
                return
            }
            if (this.isDropdownOpen) {
                this.close()
            } else {
                this.open()
            }
        },

        documentClick (e) {
            if (this.isDropdownOpen) {
                const el = this.$refs.dropdownMenu
                const target = e.target

                const clickInsideModal = [...document.getElementsByClassName('modal')].filter((el) => {
                    return el.contains(target)
                }).length

                if (el && el !== target && !el.contains(target) && !clickInsideModal) {
                    this.close()
                }
            }
        },

        close () {
            this.isDropdownOpen = false
            this.$emit('closed')
        },
        open () {
            this.isDropdownOpen = true
            this.$emit('opened')
        },

        collapse (element) {
            if (this.expand) {
                element.style.height = '0'
            }
        },
        expandHeight (element) {
            if (this.expand) {
                element.style.height = `${element.scrollHeight}px`
            }
        }
    }
})
</script>
