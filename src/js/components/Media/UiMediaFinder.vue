<template>
    <UiCard class="relative">
        <div class="flex items-center justify-between p-4">
            <form class="w-80" @submit.prevent="submitSearch">
                <UiInput
                    :model-value="search"
                    class="w-full"
                    placeholder="Rechercher un document..."
                    name="search"
                    @update:model-value="updateSearch"
                />
            </form>

            <label v-if="!readOnly" class="rounded-full btn btn-icon btn-primary">
                <input type="file" multiple class="hidden" @change="addFilesFromTopButton">
                <PlusSmallIconOuline class="w-6 h-6" />
            </label>
        </div>

        <div
            @drop="dropFiles"
            @dragover="dragOverHandler"
            @dragleave="showDropMessage = false"
        >
            <UiCardBody class="relative">
                <section aria-labelledby="gallery-heading">
                    <h2 id="gallery-heading" class="sr-only">
                        Recently viewed
                    </h2>
                    <div role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-5">
                        <slot />
                    </div>

                    <UiLoader v-if="uploading" />

                    <div v-if="empty && !readOnly" class="relative flex justify-center p-20 bg-white">
                        <div class="space-y-6 text-center">
                            <p class="text-2xl text-primary-600">
                                Déposez des fichiers ici
                            </p>
                            <svg class="w-10 h-10 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <div>
                                <UiInputFile name="file_input_upload" multiple @input="filesAdded" />
                            </div>
                        </div>
                    </div>
                </section>
            </UiCardBody>
        </div>
        <div v-if="showDropMessage" class="absolute inset-0 z-10 flex justify-center pointer-events-none">
            <div class="absolute inset-0 bg-gray-800 rounded-lg opacity-50" />
            <p class="self-center p-3 text-3xl font-bold text-gray-800">
                Déposez les fichiers ici !
            </p>
        </div>
    </UiCard>
</template>

<script>
import { defineComponent } from 'vue'
import { PlusSmallIcon } from '@heroicons/vue/24/outline'
import UiLoader from '../Loader/UiLoader.vue'
import UiCard from '../Card/UiCard.vue'
import UiCardBody from '../Card/UiCardBody.vue'
import UiInput from '../Form/UiInput.vue'
import UiInputFile from '../Form/UiInputFile.vue'

export default defineComponent({
    components: {
        UiCard,
        UiCardBody,
        UiInput,
        UiInputFile,
        UiLoader,
        PlusSmallIconOuline: PlusSmallIcon
    },
    props: {
        uploading: {
            type: Boolean,
            default: false
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            search: undefined,
            showDropMessage: false
        }
    },

    methods: {
        updateSearch (value) {
            this.search = value
            this.$emit('search', this.search)
        },
        dropFiles (event) {
            event.preventDefault()
            if (this.readOnly) {
                return
            }
            const files = []
            if (event.dataTransfer.items) {
                // Use DataTransferItemList interface to access the file(s)
                for (let i = 0; i < event.dataTransfer.items.length; i++) {
                    // If dropped items aren't files, reject them
                    if (event.dataTransfer.items[i].kind === 'file') {
                        files.push(event.dataTransfer.items[i].getAsFile())
                    }
                }
            } else {
                // Use DataTransfer interface to access the file(s)
                for (let i = 0; i < event.dataTransfer.files.length; i++) {
                    files.push(event.dataTransfer.files[i])
                }
            }

            this.filesAdded(files)

            // Pass event to removeDragData for cleanup
            this.removeDragData(event)
        },
        removeDragData (ev) {
            this.showDropMessage = false
            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to remove the drag data
                ev.dataTransfer.items.clear()
            } else {
                // Use DataTransfer interface to remove the drag data
                ev.dataTransfer.clearData()
            }
        },
        submitSearch () {
            this.$emit('search', this.search)
        },
        filesAdded (files) {
            this.$emit('add-files', files)
        },
        addFilesFromTopButton (e) {
            this.filesAdded(e.target.files)
        },
        dragOverHandler (event) {
            event.preventDefault()
            if (!this.readOnly) {
                this.showDropMessage = true
            }
        }
    }
})
</script>
