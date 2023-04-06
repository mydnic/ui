<template>
    <Transition appear>
        <div class="flex items-center">
            <div class="flex justify-between flex-1 w-0">
                <p class="flex-1 w-0 text-sm font-medium leading-5 text-gray-900">
                    {{ title }}
                </p>
                <button v-if="actions.length" class="ml-3 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out shrink-0 hover:text-indigo-500 focus:outline-none focus:underline" @click="handle(actions[0])">
                    {{ button.title }}
                </button>
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
