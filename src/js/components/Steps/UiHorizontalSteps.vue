<template>
    <nav aria-label="Progress">
        <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
            <li v-for="step in steps" :key="step.number" class="md:flex-1">
                <button
                    class="flex flex-col w-full py-2 pl-4 border-l-4 group hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                    :disabled="!step.allowed"
                    :class="{
                        'cursor-not-allowed': !step.allowed,
                        'border-primary-500 hover:border-primary-300': currentStep >= step.number,
                        'border-gray-200 hover:border-gray-300': currentStep < step.number,
                    }"
                    @click="changeStep(step)"
                >
                    <span
                        class="text-xs font-semibold tracking-wide uppercase"
                        :class="{
                            'text-primary-600': currentStep >= step.number,
                            'text-gray-500 group-hover:text-gray-700': currentStep < step.number,
                        }"
                    >
                        {{stepName}} {{ step.number }}
                    </span>
                    <span class="text-sm font-medium text-left">{{ step.label }}</span>
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
        },
        stepName: {
            type: String,
            default: 'Étape'
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
