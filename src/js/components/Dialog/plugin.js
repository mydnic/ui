export default (app) => {
    const emitter = app.config.globalProperties.emitter

    app.config.globalProperties.$dialog = {
        show (params) {
            emitter.emit('show-dialog', params)
        },
        open (params) {
            emitter.emit('show-dialog', params)
        },
        hide (params) {
            emitter.emit('hide-dialog', params)
        },
        close (params) {
            emitter.emit('hide-dialog', params)
        }
    }
}
