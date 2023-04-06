<template>
    <UiButtonSlideOver :id="'media-preview-' + media.id" :title="media.name" @closed="onClosed" @opened="onOpened">
        <template #trigger>
            <div :class="triggerClass" class="border border-transparent rounded-md group hover:border-gray-300">
                <div class="block w-full overflow-hidden text-gray-600 rounded-lg group-hover:opacity-75 aspect-w-10 aspect-h-6">
                    <img v-if="!fallbackImage" :src="media.thumb_url" :alt="media.name" class="object-cover" @error="setFallbackImage">

                    <svg
                        v-else-if="fallbackImage.includes('pdf')"
                        aria-hidden="true"
                        focusable="false"
                        class="text-red-600"
                        data-prefix="far"
                        data-icon="file-pdf"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    ><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" /></svg>
                    <svg
                        v-else-if="fallbackImage.includes('word')"
                        aria-hidden="true"
                        focusable="false"
                        class="text-blue-600"
                        data-prefix="far"
                        data-icon="file-word"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    ><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z" /></svg>
                    <svg
                        v-else-if="fallbackImage.includes('spreadsheet')"
                        aria-hidden="true"
                        focusable="false"
                        class="text-green-600"
                        data-prefix="far"
                        data-icon="file-excel"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    ><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" /></svg>
                    <svg
                        v-else
                        aria-hidden="true"
                        focusable="false"
                        class="text-orange-600"
                        data-prefix="fas"
                        data-icon="image"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    ><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" /></svg>
                </div>

                <p class="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {{ media.name }}
                </p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">
                    {{ $filters.format(media.updated_at, 'DD/MM/YYYY') }}
                </p>
            </div>
        </template>

        <div class="pb-16 space-y-6">
            <div class="block w-full overflow-hidden rounded-lg aspect-w-10 aspect-h-7">
                <img v-if="media.mime_type.includes('pdf') && media.thumb_url" :src="media.thumb_url" :alt="media.name" class="object-cover">
                <img v-else-if="!fallbackImage" :src="media.url" :alt="media.name" class="object-cover">
                <svg
                    v-else-if="fallbackImage.includes('pdf')"
                    aria-hidden="true"
                    focusable="false"
                    class="text-red-600"
                    data-prefix="far"
                    data-icon="file-pdf"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                ><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" /></svg>
                <svg
                    v-else-if="fallbackImage.includes('word')"
                    aria-hidden="true"
                    class="text-blue-600"
                    focusable="false"
                    data-prefix="far"
                    data-icon="file-word"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                ><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm220.1-208c-5.7 0-10.6 4-11.7 9.5-20.6 97.7-20.4 95.4-21 103.5-.2-1.2-.4-2.6-.7-4.3-.8-5.1.3.2-23.6-99.5-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1-24.4 99-24 96.2-24.8 103.7-.1-1.1-.2-2.5-.5-4.2-.7-5.2-14.1-73.3-19.1-99-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8 8 32.6 26.7 109.5 33.2 136 1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4 1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1 20.8-81.9 30.2-119 34.5-136 1.9-7.6-3.8-14.9-11.6-14.9h-15.8z" /></svg>
                <svg
                    v-else-if="fallbackImage.includes('spreadsheet')"
                    aria-hidden="true"
                    class="text-green-600"
                    focusable="false"
                    data-prefix="far"
                    data-icon="file-excel"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                ><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" /></svg>
                <svg
                    v-else
                    aria-hidden="true"
                    focusable="false"
                    class="text-orange-600"
                    data-prefix="fas"
                    data-icon="image"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                ><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" /></svg>
            </div>
            <div class="flex items-start justify-between mt-4">
                <div>
                    <h2 class="text-lg font-medium text-gray-900">
                        <span class="sr-only">Details for </span>{{ media.filename }}
                    </h2>
                    <p class="text-sm font-medium text-gray-500">
                        {{ $filters.filesize(media.size) }}
                    </p>
                </div>
            </div>
        </div>
        <div class="space-y-6">
            <div>
                <h3 class="font-medium text-gray-900">
                    Information
                </h3>
                <dl class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                    <div v-if="media.uploaded_by" class="flex justify-between py-3 text-sm font-medium">
                        <dt class="text-gray-500">
                            Mis en ligne par
                        </dt>
                        <dd class="text-gray-900">
                            {{ media.uploaded_by }}
                        </dd>
                    </div>
                    <div class="flex justify-between py-3 text-sm font-medium">
                        <dt class="text-gray-500">
                            Créé le
                        </dt>
                        <dd class="text-gray-900">
                            {{ $filters.format(media.created_at, 'DD MMM YYYY') }}
                        </dd>
                    </div>
                    <div class="flex justify-between py-3 text-sm font-medium">
                        <dt class="text-gray-500">
                            Modifié le
                        </dt>
                        <dd class="text-gray-900">
                            {{ $filters.format(media.updated_at, 'DD MMM YYYY') }}
                        </dd>
                    </div>
                </dl>
            </div>
            <div>
                <h3 class="font-medium text-gray-900">
                    Description
                </h3>
                <form v-if="showNoteForm" class="flex justify-between mt-2" @submit.prevent="saveNote">
                    <UiTextarea v-model="formData.notes" :name="'media_is_public_'+media.id" />
                    <button type="submit" class="flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </button>
                </form>
                <div v-else class="flex items-center justify-between mt-2">
                    <div>
                        <p v-if="formData.notes" class="text-sm text-gray-500">
                            {{ formData.notes }}
                        </p>
                        <p v-else-if="!formData.notes && editable" class="text-sm italic text-gray-500">
                            Ajouter une note ou une description à ce document.
                        </p>
                        <p v-else class="text-sm italic text-gray-400">
                            Aucune description
                        </p>
                    </div>
                    <button v-if="!showNoteForm && editable" type="button" class="flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" @click="showNoteForm = true">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        <span class="sr-only">Add description</span>
                    </button>
                </div>
            </div>
            <div v-if="hasVisibility && editable">
                <h3 class="font-medium text-gray-900">
                    Visibilité
                </h3>
                <div class="flex items-center mt-2 space-x-2">
                    <UiToggle :value="formData.is_public" :name="'media_is_public_'+media.id" @input="changeVisibility" />
                    <span class="text-sm">{{ visibilityLabel }}</span>
                </div>
            </div>
            <slot />
            <div class="grid grid-cols-2 gap-4">
                <a :href="media.url" target="_blank" class="justify-center btn btn-primary">
                    Télécharger
                </a>
                <button v-if="editable" type="button" class="justify-center btn btn-red" @click="deleteConfirm">
                    Supprimer
                </button>
            </div>
        </div>
    </UiButtonSlideOver>
</template>

<script>
import { defineComponent } from 'vue'
import UiButtonSlideOver from '../SlideOver/UiButtonSlideOver.vue'
import UiToggle from '../Form/UiToggle.vue'
import UiTextarea from '../Form/UiTextarea.vue'

export default defineComponent({
    components: {
        UiButtonSlideOver,
        UiToggle,
        UiTextarea
    },
    props: {
        media: {
            type: Object,
            required: true
        },
        hasVisibility: {
            type: Boolean,
            default: true
        },
        visibilityLabel: {
            type: String,
            default: 'Visible par les parents de l\'enfant'
        },
        editable: {
            type: Boolean,
            default: true
        },
        triggerClass: {
            type: String,
            default: ''
        }
    },

    data () {
        return {
            fallbackImage: undefined,
            showNoteForm: false,
            formData: {
                is_public: this.media.is_public,
                notes: this.media.notes
            }
        }
    },

    created () {
        if (!this.media.thumb_url) {
            this.setFallbackImage()
        }
    },

    methods: {
        changeVisibility (value) {
            this.formData.is_public = value
            this.$emit('save', this.formData)
        },
        saveNote () {
            this.showNoteForm = false
            this.$emit('save', this.formData)
        },
        deleteConfirm () {
            this.$dialog.show({
                title: 'Supprimer le document',
                message: 'Voulez-vous vraiment supprimer ce document ? Il ne sera plus possible de le récupérer.',
                buttons: [
                    {
                        title: 'Oui, supprimer',
                        handler: () => { this.$emit('delete') },
                        class: 'btn-red',
                        loadOnClick: true
                    },
                    {
                        title: 'Annuler'
                    }
                ]
            })
        },
        setFallbackImage () {
            this.fallbackImage = this.media.mime_type
        },
        onClosed () {
            //
        },
        onOpened () {
            //
        }
    }
})
</script>
