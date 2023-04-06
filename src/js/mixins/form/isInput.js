import UiLayoutInput from '../../components/Form/UiLayoutInput.vue'

export default {
    components: {
        UiLayoutInput
    },
    props: {
        name: {
            type: String,
            required: true
        },
        errors: {
            type: Object,
            required: false,
            default: null
        },
        help: {
            type: String,
            required: false,
            default: null
        },
        required: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            required: false,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        hasSlot () {
            return this.$slots && this.$slots.default
        },
        hasIconSlot () {
            return this.$slots && this.$slots.icon
        },
        layoutProps () {
            return {
                name: this.name,
                help: this.help,
                required: this.required,
                label: this.label,
                errors: this.errors
            }
        }
    }
}
