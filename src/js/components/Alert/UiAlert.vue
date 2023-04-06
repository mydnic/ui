<template>
    <Transition appear>
        <div
            v-if="!closed"
            class="p-4 rounded-md"
            :class="{
                'bg-yellow-100': level == 'warning',
                'bg-red-100': level == 'danger',
                'bg-green-100': level == 'success',
                'bg-blue-100': level == 'info'
            }"
        >
            <div class="flex items-start">
                <div class="flex items-center shrink-0">
                    <svg v-if="level == 'warning'" class="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else-if="level == 'danger'" class="w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else-if="level == 'info'" class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else-if="level == 'success'" class="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="flex flex-1 ml-3 md:justify-between">
                    <div>
                        <h3
                            v-if="title"
                            class="mb-2 text-sm font-medium"
                            :class="{
                                'text-yellow-700': level == 'warning',
                                'text-red-700': level == 'danger',
                                'text-green-700': level == 'success',
                                'text-blue-700': level == 'info'
                            }"
                            v-text="title"
                        />
                        <div
                            class="text-sm"
                            :class="{
                                'text-yellow-700': level == 'warning',
                                'text-red-700': level == 'danger',
                                'text-green-700': level == 'success',
                                'text-blue-700': level == 'info'
                            }"
                        >
                            <slot />
                        </div>
                    </div>
                    <slot name="action" />
                    <div v-if="closable" class="pl-3 ml-auto">
                        <div class="-mx-1.5 -my-1.5">
                            <button
                                class="inline-flex rounded-md p-1.5 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                :class="{
                                    'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-offset-yellow-100 focus:ring-yellow-600': level == 'warning',
                                    'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-offset-red-100 focus:ring-red-600': level == 'danger',
                                    'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-offset-green-100 focus:ring-green-600': level == 'success',
                                    'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-offset-blue-100 focus:ring-blue-600': level == 'info'
                                }"
                                @click="close"
                            >
                                <span class="sr-only">Dismiss</span>
                                <XMarkIcon class="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div v-if="dismissable" class="pl-3 ml-auto">
                        <div class="-mx-1.5 -my-1.5">
                            <button
                                class="inline-flex rounded-md p-1.5 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                :class="{
                                    'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-offset-yellow-100 focus:ring-yellow-600': level == 'warning',
                                    'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-offset-red-100 focus:ring-red-600': level == 'danger',
                                    'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-offset-green-100 focus:ring-green-600': level == 'success',
                                    'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-offset-blue-100 focus:ring-blue-600': level == 'info'
                                }"
                                @click="dismiss"
                            >
                                <span class="sr-only">Dismiss</span>
                                <XMarkIcon class="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { computed, useSlots, ref, onMounted } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const closed = ref(false)
const alertId = ref(undefined)

const props = defineProps({
    level: {
        type: String,
        default: 'info'
    },
    title: {
        type: String,
        required: false,
        default: undefined
    },
    closable: {
        type: Boolean,
        default: false
    },
    dismissable: {
        type: Boolean,
        default: false
    }
})

function getAlertId () {
    const slots = useSlots()
    if (props.title) {
        return slugify(props.title)
    }

    const slotText = computed(() => {
        return slots.default()[0].children // This is the interesting line
    })
    return slugify(slotText.value)
}

function close () {
    closed.value = true
}

function dismiss () {
    localStorage.setItem('mydnic-ui-dismiss-' + alertId.value, true)
    close()
}

function slugify (str) {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    const to = 'aaaaeeeeiiiioooouuuunc------'
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes

    return str
}

onMounted(() => {
    alertId.value = getAlertId()

    if (props.dismissable) {
        const result = localStorage.getItem('mydnic-ui-dismiss-' + alertId.value)
        if (result) {
            close()
        }
    }
})
</script>
