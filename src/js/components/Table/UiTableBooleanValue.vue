<template>
    <CheckCircleIcon v-if="value" class="w-5 h-5 text-green-500" />
    <XCircleIcon v-else class="w-5 h-5 text-red-500" />
</template>

<script>
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline'
export default {
    components: {
        CheckCircleIcon,
        XCircleIcon
    },
    props: {
        value: {
            type: Boolean,
            required: true
        }
    }
}
</script>
