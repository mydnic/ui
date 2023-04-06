<template>
    <Transition appear>
        <div class="flex items-start">
            <div class="shrink-0">
                <svg v-if="level === 'success'" class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg v-else-if="level === 'info'" fill="none" class="w-6 h-6 text-blue-500" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg v-else-if="level === 'warning'" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-orange-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <svg v-else-if="level === 'danger'" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium leading-5 text-gray-900">
                    {{ title }}
                </p>
                <p v-if="message" class="mt-1 text-sm leading-5 text-gray-500">
                    {{ message }}
                </p>
                <div v-if="actions.length" class="flex mt-4">
                    <span
                        v-for="button in actions"
                        :key="button.title"
                        class="flex w-full rounded-md shadow-sm sm:mr-3 sm:w-auto"
                    >
                        <button
                            type="button"
                            class="btn"
                            :class="[button.class]"
                            @click="handle(button)"
                        >
                            {{ button.title }}
                        </button>
                    </span>
                </div>
            </div>
            <div v-if="closable" class="flex ml-4 shrink-0">
                <button class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500" @click="$emit('close')">
                    <XMarkIcon class="w-5 h-5" />
                </button>
            </div>
        </div>
    </Transition>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import template from '../mixins/template'

export default {
    components: { XMarkIcon },
    mixins: [template]
}
</script>
