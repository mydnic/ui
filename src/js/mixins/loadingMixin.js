export default {
    data () {
        return {
            isLoading: false,
            loadingStates: {},
            errors: {}
        }
    },

    methods: {
        load (state = null) {
            if (state) {
                this.loadingStates[state] = true
            } else {
                this.isLoading = true
            }
            this.errors = null
        },

        done (message = null, state = null) {
            if (state) {
                this.loadingStates[state] = false
            } else {
                this.isLoading = false
            }

            this.errors = null

            if (message) {
                this.$toast.success({ title: message })
            }
        },

        doneWithErrors (errors, state = null) {
            if (state) {
                this.loadingStates[state] = false
            } else {
                this.isLoading = false
            }

            if (errors.error) {
                this.$toast.error({ title: 'Erreur', message: errors.error })
            } else {
                this.errors = errors.response && errors.response.data ? errors.response.data.errors : errors.errors
                this.$toast.error({ title: 'Erreur', message: 'Les données sont incorrectes ou incomplètes.' })
            }
        },

        pageError (error, dialogTitle = 'Erreur', state = null) {
            if (state) {
                this.loadingStates[state] = false
            } else {
                this.isLoading = false
            }

            let buttons, message

            if (error && error.message && error.response && error.response.status === 401) {
                buttons = [{ title: 'Se connecter', handler: () => { window.location = '/login' } }]
            } else {
                buttons = [{ title: 'Fermer' }]
            }

            if (error.response && error.response.data && error.response.data.errors) {
                message = Object.keys(error.response.data.errors).map(key => error.response.data.errors[key]).join(', ')
            } else if (error.response && error.response.data && error.response.data.message) {
                message = error.response.data.message
            } else if (error.response && error.response.message) {
                message = error.response.message
            } else if (error.message) {
                message = error.message
            } else {
                message = 'Error'
            }

            this.$dialog.show({
                title: dialogTitle,
                message,
                buttons
            })
        }
    }
}
