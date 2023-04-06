<template>
    <div class="flex flex-col h-full">
        <header class="flex items-center justify-between flex-none px-6 py-4 border-b border-gray-200">
            <h1 class="text-lg font-semibold text-gray-900">
                <time :datetime="$filters.format(from, 'YYYY-MM')" class="capitalize">Semaine {{ from.week() }}</time>
            </h1>
            <div class="flex items-center">
                <UiPeriodSwitcher
                    :from="from"
                    :to=" to"
                    period="week"
                    @changed="changeDates"
                >
                    <span class="capitalize">{{ $filters.format(from, 'DD MMMM') }} - {{ $filters.format(to, 'DD MMMM') }}</span>
                </UiPeriodSwitcher>
                <div class="hidden md:flex md:items-center">
                    <div v-if="hasHeaderSlot" class="w-px h-6 ml-6 bg-gray-300" />
                    <slot name="header-right" />
                </div>
            </div>
        </header>
        <div class="flex flex-col flex-auto overflow-auto bg-white isolate">
            <div style="width: 165%" class="flex flex-col flex-none max-w-full sm:max-w-none md:max-w-full">
                <div class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
                    <div class="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                        <button v-for="day in daysInWeek" :key="day" type="button" class="flex flex-col items-center pt-2 pb-3">
                            {{ $filters.format(day, 'dd') }} <span class="flex items-center justify-center w-8 h-8 mt-1 font-semibold text-gray-900">{{ day }}</span>
                        </button>
                    </div>

                    <div class="hidden grid-cols-7 -mr-px text-sm leading-6 text-gray-500 border-r border-gray-100 divide-x divide-gray-100 sm:grid">
                        <div class="col-end-1 w-14" />
                        <div v-for="day in daysInWeek" :key="day" class="flex items-center justify-center py-3 capitalize">
                            <span class="mr-2">
                                {{ $filters.format(day, 'dddd') }}
                            </span>
                            <span
                                class="items-center justify-center font-semibold text-gray-900"
                                :class="{
                                    'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white': today === day
                                }"
                            >
                                {{ day.slice(8) }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-auto">
                    <div class="sticky left-0 z-10 flex-none bg-white w-14 ring-1 ring-gray-100" />
                    <div ref="calContainer" class="grid flex-auto grid-cols-1 grid-rows-1">
                        <!-- Horizontal lines -->
                        <div class="grid col-start-1 col-end-2 row-start-1 divide-y divide-gray-100" style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
                            <div class="row-end-1 h-7" />
                            <div class="cal-row" data-row="1">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    12AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="2" />
                            <div class="cal-row" data-row="3">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    1AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="4" />
                            <div class="cal-row" data-row="5">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    2AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="6" />
                            <div class="cal-row" data-row="7">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    3AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="8" />
                            <div class="cal-row" data-row="9">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    4AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="10" />
                            <div class="cal-row" data-row="11">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    5AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="12" />
                            <div class="cal-row" data-row="13">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    6AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="14" />
                            <div class="cal-row" data-row="15">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    7AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="16" />
                            <div class="cal-row" data-row="17">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    8AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="18" />
                            <div class="cal-row" data-row="19">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    9AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="20" />
                            <div class="cal-row" data-row="21">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    10AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="22" />
                            <div class="cal-row" data-row="23">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    11AM
                                </div>
                            </div>
                            <div class="cal-row" data-row="24" />
                            <div class="cal-row" data-row="25">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    12PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="26" />
                            <div class="cal-row" data-row="27">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    1PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="28" />
                            <div class="cal-row" data-row="29">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    2PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="30" />
                            <div class="cal-row" data-row="31">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    3PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="32" />
                            <div class="cal-row" data-row="33">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    4PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="34" />
                            <div class="cal-row" data-row="35">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    5PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="36" />
                            <div class="cal-row" data-row="37">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    6PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="38" />
                            <div class="cal-row" data-row="39">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    7PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="40" />
                            <div class="cal-row" data-row="41">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    8PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="42" />
                            <div class="cal-row" data-row="43">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    9PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="44" />
                            <div class="cal-row" data-row="45">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    10PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="46" />
                            <div class="cal-row" data-row="47">
                                <div class="sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                                    11PM
                                </div>
                            </div>
                            <div class="cal-row" data-row="48" />
                        </div>

                        <!-- Vertical lines -->
                        <div class="hidden grid-cols-7 col-start-1 col-end-2 grid-rows-1 row-start-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                            <div class="col-start-1 cal-col row-span-full" data-col="1" />
                            <div class="col-start-2 cal-col row-span-full" data-col="2" />
                            <div class="col-start-3 cal-col row-span-full" data-col="3" />
                            <div class="col-start-4 cal-col row-span-full" data-col="4" />
                            <div class="col-start-5 cal-col row-span-full" data-col="5" />
                            <div class="col-start-6 cal-col row-span-full" data-col="6" />
                            <div class="col-start-7 cal-col row-span-full" data-col="7" />
                            <div class="w-8 col-start-8 row-span-full" />
                        </div>

                        <!-- Events -->
                        <ol class="grid grid-cols-1 col-start-1 col-end-2 row-start-1 sm:grid-cols-7 sm:pr-8" style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto">
                            <li
                                v-for="event in eventsOfCurrentWeek"
                                :key="event.id"
                                class="relative flex mt-px"
                                :class="{
                                    'sm:col-start-1': $filters.format(event.date, 'd') == 1,
                                    'sm:col-start-2': $filters.format(event.date, 'd') == 2,
                                    'sm:col-start-3': $filters.format(event.date, 'd') == 3,
                                    'sm:col-start-4': $filters.format(event.date, 'd') == 4,
                                    'sm:col-start-5': $filters.format(event.date, 'd') == 5,
                                    'sm:col-start-6': $filters.format(event.date, 'd') == 6,
                                    'sm:col-start-7': $filters.format(event.date, 'd') == 0,
                                }"
                                :style="'grid-row: '+ startSpan(event) +' / span ' + endSpan(event)"
                            >
                                <button
                                    class="absolute flex flex-col p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1"
                                    type="button"
                                    :class="{
                                        'bg-primary-50 hover:bg-primary-100': event.color === 'primary',
                                        'bg-secondary-50 hover:bg-secondary-100': event.color === 'secondary',
                                        'bg-slate-50 hover:bg-slate-100': event.color === 'slate',
                                        'bg-gray-50 hover:bg-gray-100': event.color === 'gray',
                                        'bg-red-50 hover:bg-red-100': event.color === 'red',
                                        'bg-orange-50 hover:bg-orange-100': event.color === 'orange',
                                        'bg-yellow-50 hover:bg-yellow-100': event.color === 'yellow',
                                        'bg-green-50 hover:bg-green-100': event.color === 'green',
                                        'bg-teal-50 hover:bg-teal-100': event.color === 'teal',
                                        'bg-cyan-50 hover:bg-cyan-100': event.color === 'cyan',
                                        'bg-blue-50 hover:bg-blue-100': event.color === 'blue',
                                        'bg-indigo-50 hover:bg-indigo-100': event.color === 'indigo',
                                        'bg-purple-50 hover:bg-purple-100': event.color === 'purple',
                                        'bg-pink-50 hover:bg-pink-100': event.color === 'pink',
                                    }"
                                    @click="eventSelected(event)"
                                >
                                    <p
                                        class="order-1 font-semibold text-left"
                                        :class="{
                                            'text-primary-700': event.color === 'primary',
                                            'text-secondary-700': event.color === 'secondary',
                                            'text-slate-700': event.color === 'slate',
                                            'text-gray-700': event.color === 'gray',
                                            'text-red-700': event.color === 'red',
                                            'text-orange-700': event.color === 'orange',
                                            'text-yellow-700': event.color === 'yellow',
                                            'text-green-700': event.color === 'green',
                                            'text-teal-700': event.color === 'teal',
                                            'text-cyan-700': event.color === 'cyan',
                                            'text-blue-700': event.color === 'blue',
                                            'text-indigo-700': event.color === 'indigo',
                                            'text-purple-700': event.color === 'purple',
                                            'text-pink-700': event.color === 'pink',
                                        }"
                                    >
                                        {{ event.name }}
                                    </p>
                                    <p
                                        :class="{
                                            'text-primary-500 group-hover:text-primary-700': event.color === 'primary',
                                            'text-secondary-500 group-hover:text-secondary-700': event.color === 'secondary',
                                            'text-slate-500 group-hover:text-slate-700': event.color === 'slate',
                                            'text-gray-500 group-hover:text-gray-700': event.color === 'gray',
                                            'text-red-500 group-hover:text-red-700': event.color === 'red',
                                            'text-orange-500 group-hover:text-orange-700': event.color === 'orange',
                                            'text-yellow-500 group-hover:text-yellow-700': event.color === 'yellow',
                                            'text-green-500 group-hover:text-green-700': event.color === 'green',
                                            'text-teal-500 group-hover:text-teal-700': event.color === 'teal',
                                            'text-cyan-500 group-hover:text-cyan-700': event.color === 'cyan',
                                            'text-blue-500 group-hover:text-blue-700': event.color === 'blue',
                                            'text-indigo-500 group-hover:text-indigo-700': event.color === 'indigo',
                                            'text-purple-500 group-hover:text-purple-700': event.color === 'purple',
                                            'text-pink-500 group-hover:text-pink-700': event.color === 'pink',
                                        }"
                                    >
                                        <time :datetime="event.date + ' ' + event.start">{{ event.start.slice(0, 5) }}</time>
                                    </p>
                                </button>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isBetween from 'dayjs/plugin/isBetween'
import dateRange from '../../mixins/dateRange'

import UiPeriodSwitcher from './UiPeriodSwitcher.vue'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)
dayjs.extend(isBetween)

export default {
    components: { UiPeriodSwitcher },
    mixins: [dateRange],

    props: {
        events: {
            type: Array,
            required: true
        },
        defaultWeek: {
            type: [String, Object, Date],
            default: null
        }
    },

    data () {
        return {
            from: dayjs().startOf('week'),
            to: dayjs().endOf('week')
        }
    },

    computed: {
        hasHeaderSlot () {
            return this.$slots && this.$slots['header-right']
        },
        today () {
            return dayjs().format('YYYY-MM-DD')
        },
        daysInWeek () {
            return this.generateDateRange(this.from, this.to, 1, 'day')
        },
        eventsOfCurrentWeek () {
            return this.events.filter(e => dayjs(e.date).isBetween(this.from, this.to))
        },
        spanMinutes () {
            return 5
        }
    },

    created () {
        if (this.defaultWeek) {
            this.from = dayjs(this.defaultWeek).startOf('week')
            this.to = dayjs(this.from).endOf('week')
        }
    },

    mounted () {
        this.registerMouseListener()
    },

    methods: {
        registerMouseListener () {
            const container = this.$refs.calContainer
            container.addEventListener('mousemove', function (event) {
                let row = -1
                let col = -1
                const x = event.pageX - window.scrollX
                const y = event.pageY - window.scrollY
                const el = event.currentTarget
                if (el) {
                    const rows = el.getElementsByClassName('cal-row')

                    for (const rowEl of rows) {
                        const rect = rowEl.getBoundingClientRect()
                        if (x >= rect.left && x < rect.right && y >= rect.top && y <= rect.bottom) {
                            row = rowEl.getAttribute('data-row')
                        }
                    }

                    const cols = el.getElementsByClassName('cal-col')

                    for (const calEl of cols) {
                        const rect = calEl.getBoundingClientRect()
                        if (x >= rect.left && x < rect.right && y >= rect.top && y <= rect.bottom) {
                            col = calEl.getAttribute('data-col')
                        }
                    }

                    this.mouseOnCol = col
                    this.mouseOnRow = row
                }
            })
        },

        changeDates ({ from, to }) {
            this.from = dayjs(from).startOf('week')
            this.to = dayjs(to).endOf('week')
            this.$emit('change', { from: this.from, to: this.to })
        },

        eventSelected (event) {
            this.$emit('event-clicked', event)
        },

        startSpan (event) {
            const result = dayjs(event.date + ' ' + event.start)
                .diff(dayjs(event.date + ' 00:00:00'), 'minute') / this.spanMinutes

            return Math.round(result) + 2
        },
        endSpan (event) {
            const result = dayjs(event.date + ' ' + event.end)
                .diff(dayjs(event.date + ' ' + event.start), 'minute') / this.spanMinutes

            return Math.round(result)
        }
    }
}
</script>
