export default (app) => {
    const emitter = app.config.globalProperties.emitter

    app.config.globalProperties.$modal = {
        closeAll (params) {
            emitter.emit('modal-close-all', params)
        }
    }
}
