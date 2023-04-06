<template>
    <UiAlert v-if="hasErrors" level="danger" title="Il y a des erreurs dans les données soumises">
        <ul v-for="(error, field) in errors" :key="field" role="list" class="pl-5 space-y-1 list-disc">
            <li v-for="e in errors[field]" :key="e">
                {{ e }}
            </li>
        </ul>
    </UiAlert>
</template>

<script>
import UiAlert from '../Alert/UiAlert.vue'

export default {
    components: { UiAlert },
    props: {
        errors: {
            type: Object,
            default: null
        }
    },

    computed: {
        hasErrors () {
            return this.errors && Object.keys(this.errors).length > 0
        }
    }
}
</script>
