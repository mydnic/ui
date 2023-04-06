export default {
    data () {
        return {
            isDirty: false
        }
    },

    methods: {
        change () {
            this.isDirty = true
        },
        clean () {
            this.isDirty = false
        }
    }
}
