export default (app) => {
    const emitter = app.config.globalProperties.emitter

    app.config.globalProperties.$toast = {
        show (message, options = {}) {
            this.condensed(message, options)
        },
        condensed (title, params = {}) {
            params.title = title
            params.level = 'info'
            params.template = 'condensed'
            emitter.emit('toast', params)
        },
        error (params) {
            params.level = 'danger'
            emitter.emit('toast', params)
        },
        danger (params) {
            params.level = 'danger'
            emitter.emit('toast', params)
        },
        success (params) {
            params.level = 'success'
            emitter.emit('toast', params)
        },
        info (params) {
            params.level = 'info'
            emitter.emit('toast', params)
        },
        warning (params) {
            params.level = 'warning'
            emitter.emit('toast', params)
        }
    }
}
