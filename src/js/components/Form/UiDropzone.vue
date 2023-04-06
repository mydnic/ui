<template>
    <div
        class="relative"
        @drop="dropFiles"
        @dragover="dragOverHandler"
        @dragleave="showMessage = false"
    >
        <div v-if="showMessage">
            <slot name="drop-here-message" />
        </div>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            showMessage: false
        }
    },

    methods: {
        dropFiles (ev) {
            ev.preventDefault()
            if (!this.disabled) {
                if (ev.dataTransfer.items) {
                    // Use DataTransferItemList interface to access the file(s)
                    for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                        // If dropped items aren't files, reject them
                        if (ev.dataTransfer.items[i].kind === 'file') {
                            this.addFile(ev.dataTransfer.items[i].getAsFile())
                        }
                    }
                } else {
                    // Use DataTransfer interface to access the file(s)
                    for (let i = 0; i < ev.dataTransfer.files.length; i++) {
                        this.addFile(ev.dataTransfer.files[i])
                    }
                }
                // Pass event to removeDragData for cleanup
                this.removeDragData(ev)
            }
        },

        addFile (file) {
            this.$emit('file-added', file)
        },

        dragOverHandler (ev) {
            ev.preventDefault()

            if (!this.disabled) {
                this.showMessage = true
            }
        },

        removeDragData (ev) {
            this.showMessage = false
            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to remove the drag data
                ev.dataTransfer.items.clear()
            } else {
                // Use DataTransfer interface to remove the drag data
                ev.dataTransfer.clearData()
            }
        }
    }
}
</script>
