<template>
    <div>
        <header class="relative z-20 flex items-center justify-between px-6 py-4 mb-4 border-b border-slate-200 lg:flex-none">
            <h1 class="text-lg font-semibold text-slate-900">
                <time :datetime="year">{{ $filters.format(from, 'YYYY') }}</time>
            </h1>
            <div class="flex items-center">
                <UiPeriodSwitcher
                    :from="from"
                    :to=" to"
                    period="year"
                    @changed="changeDates"
                >
                    <span id="year-table-title">{{ $filters.format(from, 'YYYY') }}</span>
                </UiPeriodSwitcher>
                <div class="hidden md:flex md:items-center">
                    <div v-if="hasHeaderSlot" class="w-px h-6 mx-6 bg-slate-300" />
                    <slot name="header-right" />
                </div>
                <div class="relative ml-6 md:hidden">
                    <button id="menu-0-button" type="button" class="flex items-center p-2 -mx-2 border border-transparent rounded-full text-slate-400 hover:text-slate-500" aria-expanded="false" aria-haspopup="true">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: solid/dots-horizontal -->
                        <EllipsisHorizontalIconSolid class="w-5 h-5" />
                    </button>

                    <div class="absolute right-0 mt-3 overflow-hidden origin-top-right bg-white divide-y rounded-md shadow-lg divide-slate-100 focus:outline-none w-36 ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-0-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <!-- Active: "bg-slate-100 text-slate-900", Not Active: "text-slate-700" -->
                            <a id="menu-0-item-0" href="#" class="block px-4 py-2 text-sm text-slate-700" role="menuitem" tabindex="-1">Create event</a>
                        </div>
                        <div class="py-1" role="none">
                            <a id="menu-0-item-1" href="#" class="block px-4 py-2 text-sm text-slate-700" role="menuitem" tabindex="-1">Go to today</a>
                        </div>
                        <div class="py-1" role="none">
                            <a id="menu-0-item-2" href="#" class="block px-4 py-2 text-sm text-slate-700" role="menuitem" tabindex="-1">Day view</a>
                            <a id="menu-0-item-3" href="#" class="block px-4 py-2 text-sm text-slate-700" role="menuitem" tabindex="-1">Week view</a>
                            <a id="menu-0-item-4" href="#" class="block px-4 py-2 text-sm text-slate-700" role="menuitem" tabindex="-1">Month view</a>
                            <a id="menu-0-item-5" href="#" class="block px-4 py-2 text-sm text-slate-700" role="menuitem" tabindex="-1">Year view</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <table class="hidden w-full md:block" aria-describedby="year-table-title">
            <thead>
                <tr>
                    <th scope="col" />
                    <th
                        v-for="(col, index) in cols"
                        :key="index"
                        scope="col"
                        class="w-8 h-8 text-xs leading-6 text-slate-500"
                    >
                        {{ col }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(month, monthIndex) in months" :key="month" class="h-8">
                    <td class="h-8 pr-2 text-xs leading-6 text-right capitalize text-slate-700" v-text="month" />
                    <td
                        v-for="(day, index) in daysFromMonth(monthIndex)"
                        :key="index"
                        class="relative w-8 h-8 p-0 text-xs text-center border border-slate-300"
                        :class="{
                            'bg-slate-200': day.weekend,
                            'bg-white': !day.weekend
                        }"
                        :data-date="day.date ? day.date.format('YYYY-MM-DD') : null"
                    >
                        <slot v-if="day.date" :name="day.date.format('YYYY-MM-DD')">
                            {{ day.date.format('D') }}
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="block md:hidden">
            <div v-for="(month, monthIndex) in months" :key="month">
                <UiDropdown class="mb-1">
                    <template #trigger>
                        <div class="px-2 py-1 font-medium leading-6 text-center capitalize rounded cursor-pointer text-slate-600 bg-slate-50">
                            {{ month }}
                        </div>
                    </template>
                    <template #content>
                        <div class="p-2 text-center bg-white">
                            <div class="grid grid-cols-7 font-bold text-slate-900">
                                <div v-for="day in ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di',]" :key="day" class="border">
                                    {{ day }}
                                </div>
                            </div>
                            <div class="grid grid-cols-7 font-medium text-slate-600">
                                <div
                                    v-for="(day, index) in daysFromMonth(monthIndex)"
                                    :key="index"
                                    class="relative border"
                                >
                                    <slot v-if="day.date" :name="day.date.format('YYYY-MM-DD')">
                                        {{ day.date.format('D') }}
                                    </slot>
                                </div>
                            </div>
                        </div>
                    </template>
                </UiDropdown>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'
import fr from 'dayjs/locale/fr'
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid'
import UiDropdown from '../Dropdown/UiDropdown.vue'
import UiPeriodSwitcher from './UiPeriodSwitcher.vue'

dayjs.extend(weekday)
dayjs.locale({ ...fr, weekStart: 1 })

export default {
    components: {
        EllipsisHorizontalIconSolid: EllipsisHorizontalIcon,
        UiPeriodSwitcher,
        UiDropdown
    },

    props: {
        year: {
            type: [String, Number],
            default: () => {
                return dayjs().year()
            }
        }
    },

    data () {
        return {
            from: dayjs().year(this.year || dayjs().year()).startOf('year'),
            to: dayjs().year(this.year || dayjs().year()).endOf('year')
        }
    },

    computed: {
        hasHeaderSlot () {
            return this.$slots && this.$slots['header-right']
        },
        months () {
            dayjs.extend(localeData)

            dayjs().localeData()
            return dayjs.months()
        },
        cols () {
            return [
                'L', 'M', 'M', 'J', 'V', 'S', 'D',
                'L', 'M', 'M', 'J', 'V', 'S', 'D',
                'L', 'M', 'M', 'J', 'V', 'S', 'D',
                'L', 'M', 'M', 'J', 'V', 'S', 'D',
                'L', 'M', 'M', 'J', 'V', 'S', 'D',
                'L', 'M', 'M', 'J', 'V'
            ]
        }
    },

    methods: {
        isWeekend (day) {
            return dayjs(day).weekday() === 6 || dayjs(day).weekday() === 5
        },

        daysFromMonth (month) {
            const firstDayOfWeek = dayjs()
                .year(dayjs(this.from).year())
                .month(month)
                .startOf('month')
                .weekday()

            const days = [...Array(firstDayOfWeek).keys()].map((d) => {
                return {
                    date: null,
                    weekend: [5, 6].includes(d)
                }
            })

            const next = [...Array(41 - firstDayOfWeek).keys()].filter(i => i !== 0).map((day) => {
                const date = dayjs()
                    .year(dayjs(this.from).year())
                    .month(month)
                    .date(day)

                if (date.month() !== month) {
                    return {
                        date: null,
                        weekend: [5, 6].includes(date.weekday())
                    }
                }

                return {
                    date,
                    weekend: [5, 6].includes(date.weekday())
                }
            })

            return [...days, ...next]
        },

        changeDates ({ from, to }) {
            this.from = dayjs(from)
            this.to = dayjs(to)
            this.$emit('change', { from: this.from, to: this.to })
        }
    }
}
</script>
