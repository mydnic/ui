<template>
    <div
        class="rounded-lg"
        :class="{'overflow-auto shadow': paginate !== undefined}"
    >
        <table
            aria-labelledby="Data Table"
            class="table-default"
            :class="{
                'with-pagination': paginate !== undefined,
                'compact': compact
            }"
        >
            <thead>
                <tr>
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
                                class="ml-2 text-gray-300 focus:outline-none"
                                :class="{
                                    'text-gray-700': sortByOptions && sortByOptions.col.slot === col.slot
                                }"
                                @click="sortBy(col)"
                            >
                                <svg v-if="sortByOptions && sortByOptions.col.slot === col.slot && sortByOptions.order === 'asc'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" /></svg>
                                <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" /></svg>
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.id" :data-test-item-id="item.id">
                    <td
                        v-for="col in cols"
                        :key="col.slot"
                        :class="[col.slot, col.class, col.mobile === false ? 'md:table-cell hidden' : '']"
                    >
                        <slot :item="item" :name="col.slot" />
                    </td>
                </tr>
                <tr v-if="!items.length" data-test-no-items>
                    <td :colspan="cols.length" class="py-10 text-center text-gray-400 bg-white rounded-b-md">
                        <div class="mb-2">
                            <slot name="empty" />
                        </div>
                        <svg class="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" /></svg>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="paginate !== undefined" class="flex items-center justify-between px-4 py-3 bg-white rounded-b sm:px-6">
            <div class="flex-grow hidden sm:block">
                <p class="text-sm leading-5 text-gray-500">
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
export default {
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
        compact: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            page: this.currentPage || 1,
            sortByOptions: undefined
        }
    },

    computed: {
        filteredItems () {
            let items = this.items
            if (this.sortByOptions && this.sortByOptions.col) {
                items = items.sort((a, b) => {
                    if (this.sortByOptions.order === 'desc') {
                        return (this.sortByOptions.col.sortableBy(a) > this.sortByOptions.col.sortableBy(b)) ? 1 : -1
                    } else {
                        return (this.sortByOptions.col.sortableBy(a) < this.sortByOptions.col.sortableBy(b)) ? 1 : -1
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
            this.$emit('prev-page')
        },
        nextPage () {
            if (this.handlePagination) {
                this.page++
            }
            this.$emit('next-page')
        }
    }
}
</script>
