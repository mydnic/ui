export default {
    props: {
        closable: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
        message: {
            type: String,
            default: undefined
        },
        actions: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        handle (button) {
            if (button.handler) {
                button.handler()
            } else {
                this.$emit('close')
            }
        }
    }
}
