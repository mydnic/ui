<template>
    <div class="rounded-lg shadow ring-1 ring-black ring-opacity-5">
        <table
            aria-labelledby="Data Table"
            class="table-default"
            :class="{
                'with-pagination': paginate !== undefined,
                'condensed': condensed
            }"
        >
            <thead>
                <tr>
                    <th v-if="selectable" scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                        <input type="checkbox" class="absolute w-4 h-4 -mt-2 rounded text-primary-600 border-slate-300 left-4 top-1/2 focus:ring-primary-500 sm:left-6" :checked="selectedIndeterminate || selectedItems.length === items.length" :indeterminate="selectedIndeterminate" @change="selectedItems = $event.target.checked ? items.map((p) => p.id) : []">
                    </th>
                    <th
                        v-for="col in cols"
                        :key="col.slot"
                        scope="col"
                        :data-test-table-header="col.slot"
                        :class="[col.class, col.mobile === false ? 'md:table-cell hidden' : '']"
                    >
                        <div class="flex items-center">
                            {{ col.title }}
                            <button
                                v-if="col.sortableBy"
                                class="flex-none ml-2 rounded text-slate-500 bg-slate-100 group-hover:bg-slate-300"
                                :class="{
                                    'text-slate-900 bg-slate-200': sortByOptions && sortByOptions.col.slot === col.slot
                                }"
                                @click="sortBy(col)"
                            >
                                <ChevronDownIconSolid v-if="sortByOptions && sortByOptions.col.slot === col.slot && sortByOptions.order === 'asc'" class="w-5 h-5" aria-hidden="true" />
                                <ChevronUpIconSolid v-else class="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.id" :data-test-item-id="item.id">
                    <td v-if="selectable" class="relative w-12 px-6 sm:w-16 sm:px-8">
                        <div v-if="selectedItems.includes(item.id)" class="absolute inset-y-0 left-0 w-0.5 bg-primary-600" />
                        <input v-model="selectedItems" type="checkbox" class="absolute w-4 h-4 -mt-2 rounded text-primary-600 border-slate-300 left-4 top-1/2 focus:ring-primary-500 sm:left-6" :value="item.id">
                    </td>
                    <td
                        v-for="col in cols"
                        :key="col.slot"
                        :class="[col.slot, col.class, col.mobile === false ? 'md:table-cell hidden' : '']"
                    >
                        <slot :item="item" :name="col.slot" />
                    </td>
                </tr>
                <tr v-if="!items.length" data-test-no-items>
                    <td :colspan="cols.length" class="py-10 text-center bg-white text-slate-400 rounded-b-md">
                        <div class="mb-2">
                            <slot name="empty" />
                        </div>
                        <svg class="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" /></svg>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="paginate !== undefined" class="flex items-center justify-between px-4 py-3 bg-white rounded-b-lg sm:px-6">
            <div class="flex-grow hidden sm:block">
                <p class="text-sm leading-5 text-slate-500">
                    Affichage de
                    <span class="font-semibold" v-text="pagination.from" />
                    à
                    <span class="font-semibold" v-text="pagination.to" />
                    sur
                    <span class="font-semibold" v-text="pagination.total" />
                    résultats
                </p>
            </div>
            <div class="flex justify-between sm:justify-end">
                <button
                    :disabled="pagination.currentPage === 1"
                    type="button"
                    class="btn"
                    @click="prevPage"
                >
                    Précédent
                </button>
                <button
                    :disabled="pagination.currentPage >= pagination.lastPage"
                    type="button"
                    class="ml-2 btn"
                    @click="nextPage"
                >
                    Suivant
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        ChevronDownIconSolid: ChevronDownIcon,
        ChevronUpIconSolid: ChevronUpIcon
    },
    props: {
        cols: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        paginate: {
            type: Number,
            required: false,
            default: undefined
        },
        handlePagination: {
            type: Boolean,
            default: true
        },
        paginationTotal: {
            type: Number,
            required: false,
            default: undefined
        },
        currentPage: {
            type: Number,
            default: undefined
        },
        condensed: {
            type: Boolean,
            default: false
        },
        selectable: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            page: this.currentPage || 1,
            sortByOptions: undefined,
            selectedItems: []
        }
    },

    computed: {
        filteredItems () {
            let items = this.items
            if (this.sortByOptions && this.sortByOptions.col) {
                items = items.sort((a, b) => {
                    if (this.sortByOptions.order === 'desc') {
                        return (this.sortByOptions.col.sortableBy(a, b) > this.sortByOptions.col.sortableBy(b, a)) ? 1 : -1
                    } else {
                        return (this.sortByOptions.col.sortableBy(a, b) < this.sortByOptions.col.sortableBy(b, a)) ? 1 : -1
                    }
                })
            }

            if (this.paginate !== undefined && this.handlePagination) {
                return items.slice((this.page - 1) * this.paginate, this.page * this.paginate)
            }

            return items
        },
        pagination () {
            const total = this.paginationTotal || this.items.length
            return {
                currentPage: this.currentPage || this.page,
                lastPage: total / this.paginate,
                total,
                from: (this.page * this.paginate) - this.paginate + 1,
                to: (this.page * this.paginate) > total ? total : (this.page * this.paginate)
            }
        },
        selectedIndeterminate () {
            return this.selectedItems.length > 0 && this.selectedItems.length < this.items.length
        }
    },

    watch: {
        selectedItems () {
            this.$emit('selection-changed', this.items.filter(i => this.selectedItems.includes(i.id)))
        }
    },

    methods: {
        sortBy (col) {
            if (this.sortByOptions && this.sortByOptions.col.slot === col.slot) {
                this.sortByOptions = {
                    col,
                    order: this.sortByOptions.order === 'desc' ? 'asc' : 'desc'
                }
            } else {
                this.sortByOptions = {
                    col,
                    order: 'asc'
                }
            }
            this.$emit('sort-by', this.sortByOptions)
        },

        prevPage () {
            if (this.handlePagination) {
                this.page--
            }
            this.$emit('page-changed', this.currentPage - 1)
        },
        nextPage () {
            if (this.handlePagination) {
                this.page++
            }
            this.$emit('page-changed', this.currentPage + 1)
        }
    }
}
</script>
