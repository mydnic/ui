<template>
    <nav aria-label="Progress">
        <ol class="overflow-hidden">
            <li v-for="(step, index) in steps" :key="step.number" class="relative pb-10">
                <div
                    v-if="index !== steps.length - 1"
                    class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-primary-500"
                    :class="{
                        'bg-primary': currentStep > step.number,
                        'bg-gray-300': currentStep <= step.number,
                    }"
                    aria-hidden="true"
                />
                <button
                    class="relative flex items-center focus:outline-none group"
                    :disabled="!step.allowed"
                    :class="{
                        'cursor-not-allowed': !step.allowed,
                    }"
                    @click="changeStep(step)"
                >
                    <span class="flex items-center h-9">
                        <span v-if="currentStep === step.number" class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-primary-500">
                            <span class="h-2.5 w-2.5 bg-primary rounded-full" />
                        </span>
                        <span v-else-if="currentStep > step.number" class="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 group-hover:bg-primary-800">
                            <svg
                                class="w-5 h-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span
                            v-else
                            class="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full"
                            :class="{
                                'group-hover:border-gray-400': step.allowed
                            }"
                        >
                            <span
                                class="h-2.5 w-2.5 bg-transparent rounded-full"
                                :class="{
                                    'group-hover:bg-gray-300': step.allowed
                                }"
                            />
                        </span>
                    </span>
                    <span class="flex flex-col min-w-0 ml-4">
                        <span
                            class="text-xs font-semibold tracking-wide text-left uppercase"
                            :class="{
                                'text-primary': currentStep === step.number,
                                'text-gray-500': !step.allowed,
                            }"
                        >{{ step.label }}</span>
                        <span v-if="step.sublabel" class="text-sm text-left text-gray-500">{{ step.sublabel }}</span>
                    </span>
                </button>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    props: {
        current: {
            type: [String, Number],
            default: 1
        },
        steps: {
            type: [Array, Object],
            required: true
        }
    },

    computed: {
        currentStep () {
            return parseInt(this.current)
        }
    },

    methods: {
        changeStep (step) {
            if (step.allowed) {
                this.$emit('change-step', step.number)
            }
        }
    }
}
</script>
