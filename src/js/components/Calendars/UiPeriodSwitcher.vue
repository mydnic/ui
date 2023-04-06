<template>
    <div class="flex items-center rounded-md shadow-sm md:items-stretch">
        <button type="button" class="flex items-center justify-center py-2 pl-3 pr-4 text-gray-400 bg-white border border-r-0 border-gray-300 rounded-l-md hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50" @click="prev">
            <span class="sr-only">Précédent</span>
            <ChevronLeftIconSolid class="w-5 h-5" />
        </button>
        <UiDropdown ref="datePickerDropdown" class="relative">
            <template #trigger>
                <button type="button" class="border-t border-b border-gray-300 bg-white py-2 px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative block">
                    <slot />
                </button>
            </template>
            <template #content>
                <form class="absolute right-0 z-40 flex items-center p-3 mt-2 space-x-4 origin-top-right bg-white rounded-md shadow-lg" @submit.prevent="changeDay">
                    <UiInputDate placeholder="Semaine" :value="from" name="from" @input="setNewDate" />
                    <button type="submit" class="btn btn-icon">
                        <CheckIconSolid class="w-5 h-5" />
                    </button>
                </form>
            </template>
        </UiDropdown>
        <button type="button" class="flex items-center justify-center py-2 pl-4 pr-3 text-gray-400 bg-white border border-l-0 border-gray-300 rounded-r-md hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50" @click="next">
            <span class="sr-only">Suivant</span>
            <ChevronRightIconSolid class="w-5 h-5" />
        </button>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import { ChevronLeftIcon, CheckIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import UiDropdown from '../Dropdown/UiDropdown.vue'
import UiInputDate from '../Form/UiInputDate.vue'

export default {
    components: {
        UiDropdown,
        UiInputDate,
        ChevronLeftIconSolid: ChevronLeftIcon,
        CheckIconSolid: CheckIcon,
        ChevronRightIconSolid: ChevronRightIcon
    },
    props: {
        from: {
            type: [Object, String, Date],
            required: true
        },
        to: {
            type: [Object, String, Date],
            required: true
        },
        period: {
            type: String,
            default: 'week'
        }
    },

    data () {
        return {
            date: this.from
        }
    },

    methods: {
        setNewDate (date) {
            this.date = dayjs(date.target.value).startOf(this.period).format('YYYY-MM-DD')
        },

        changeDay () {
            this.$refs.datePickerDropdown.close()
            this.$emit('changed', {
                from: dayjs(this.date).startOf(this.period).format('YYYY-MM-DD'),
                to: dayjs(this.date).endOf(this.period).format('YYYY-MM-DD')
            })
        },

        prev () {
            this.date = dayjs(this.from).subtract(1, this.period).format('YYYY-MM-DD')
            this.changeDay()
        },

        next () {
            this.date = dayjs(this.from).add(1, this.period).format('YYYY-MM-DD')
            this.changeDay()
        }
    }
}
</script>
