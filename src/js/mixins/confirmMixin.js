export default {
    methods: {
        confirm (title, message, callback, confirmButton = 'Confirm', cancelButton = 'Cancel') {
            this.$dialog.show({
                title,
                message,
                buttons: [
                    { title: confirmButton, handler: callback, loadOnClick: true, class: 'btn-primary' },
                    { title: cancelButton }
                ]
            })
        }
    }
}
