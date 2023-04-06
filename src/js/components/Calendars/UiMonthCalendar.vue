<template>
    <div class="lg:flex lg:h-full lg:flex-col">
        <header class="relative z-20 flex items-center justify-between px-6 py-4 border-b border-gray-200 lg:flex-none">
            <h1 class="text-lg font-semibold text-gray-900">
                <time :datetime="$filters.format(from, 'YYYY-MM')" class="capitalize">{{ $filters.format(from, 'MMMM YYYY') }}</time>
            </h1>
            <div class="flex items-center">
                <UiPeriodSwitcher
                    :from="from"
                    :to=" to"
                    period="month"
                    @changed="changeDates"
                >
                    <span class="capitalize">{{ $filters.format(from, 'MMMM') }}</span>
                </UiPeriodSwitcher>
                <div class="hidden md:flex md:items-center">
                    <div v-if="hasHeaderSlot" class="w-px h-6 mx-6 bg-gray-300" />
                    <slot name="header-right" />
                </div>
            </div>
        </header>
        <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
            <div class="grid grid-cols-7 gap-px text-xs font-semibold leading-6 text-center text-gray-700 bg-gray-200 border-b border-gray-300 lg:flex-none">
                <div class="py-2 bg-white">
                    L<span class="sr-only sm:not-sr-only">un</span>
                </div>
                <div class="py-2 bg-white">
                    M<span class="sr-only sm:not-sr-only">ar</span>
                </div>
                <div class="py-2 bg-white">
                    M<span class="sr-only sm:not-sr-only">er</span>
                </div>
                <div class="py-2 bg-white">
                    J<span class="sr-only sm:not-sr-only">eu</span>
                </div>
                <div class="py-2 bg-white">
                    V<span class="sr-only sm:not-sr-only">en</span>
                </div>
                <div class="py-2 bg-white">
                    S<span class="sr-only sm:not-sr-only">am</span>
                </div>
                <div class="py-2 bg-white">
                    D<span class="sr-only sm:not-sr-only">im</span>
                </div>
            </div>
            <div class="flex text-xs leading-6 text-gray-700 bg-gray-200 lg:flex-auto">
                <div class="hidden w-full lg:grid lg:grid-cols-7 auto-rows-fr lg:gap-px">
                    <div v-for="day in days" :key="day.date" :class="[day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500', 'relative py-2 px-3']">
                        <time v-if="day.date" :datetime="day.date" :class="day.isToday ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white' : undefined">
                            {{ day.date.split('-').pop().replace(/^0/, '') }}
                        </time>
                        <ol v-if="day.events && day.events.length > 0" class="mt-2">
                            <li v-for="event in day.events" :key="event.id">
                                <button class="flex group" @click="handleEventClick(event)">
                                    <p class="flex-auto font-medium text-gray-900 truncate group-hover:text-indigo-600">
                                        {{ event.name }}
                                    </p>
                                    <time :datetime="event.datetime" class="flex-none hidden ml-3 text-gray-500 group-hover:text-indigo-600 xl:block">{{ event.time }}</time>
                                </button>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="grid w-full grid-cols-7 gap-px auto-rows-fr isolate lg:hidden">
                    <button
                        v-for="day in days"
                        :key="day.date"
                        type="button"
                        :class="[day.isCurrentMonth ? 'bg-white' : 'bg-gray-50', (day.isSelected || day.isToday) && 'font-semibold', day.isSelected && 'text-white', !day.isSelected && day.isToday && 'text-indigo-600', !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900', !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500', 'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10']"
                        @click="selectDay(day)"
                    >
                        <time v-if="day.date" :datetime="day.date" :class="[day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full', day.isSelected && day.isToday && 'bg-indigo-600', day.isSelected && !day.isToday && 'bg-gray-900', 'ml-auto']">
                            {{ day.date.split('-').pop().replace(/^0/, '') }}
                        </time>
                        <p class="sr-only">
                            {{ day.events.length }} events
                        </p>
                        <div v-if="day.events.length > 0" class="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <div v-for="event in day.events" :key="event.id" class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div v-if="selectedDay?.events.length > 0" class="px-4 py-10 sm:px-6 lg:hidden">
            <ol class="overflow-hidden text-sm bg-white divide-y divide-gray-100 rounded-lg shadow ring-1 ring-black ring-opacity-5">
                <li
                    v-for="event in selectedDay.events"
                    :key="event.id"
                    class="flex p-4 pr-6 group focus-within:bg-gray-50 hover:bg-gray-50"
                >
                    <div class="flex-auto">
                        <p class="font-semibold text-gray-900">
                            {{ event.name }}
                        </p>
                        <time :datetime="event.datetime" class="flex items-center mt-2 text-gray-700">
                            <ClockIconSolid class="w-5 h-5 mr-2 text-gray-400" aria-hidden="true" />
                            {{ event.time }}
                        </time>
                    </div>
                    <button
                        class="self-center flex-none px-3 py-2 ml-6 font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm opacity-0 hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                        @click="handleEventClick(event)"
                    >
                        Détail<span class="sr-only">, {{ event.name }}</span>
                    </button>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { defineComponent } from 'vue'

import { ClockIcon } from '@heroicons/vue/24/solid'

dayjs.extend(weekday)
dayjs.extend(weekOfYear)

export default defineComponent({
    components: {
        ClockIconSolid: ClockIcon
    },
    props: {
        events: {
            type: Array,
            required: true
        }
    },

    data () {
        return {
            from: dayjs().startOf('month'),
            to: dayjs().endOf('month'),
            selectedDate: dayjs()
        }
    },

    computed: {
        hasHeaderSlot () {
            return this.$slots && this.$slots['header-right']
        },
        today () {
            return dayjs().format('YYYY-MM-DD')
        },
        month () {
            return Number(this.selectedDate.format('M'))
        },
        year () {
            return Number(this.selectedDate.format('YYYY'))
        },
        selectedDay () {
            return this.days.find(day => day.date === this.selectedDate.format('YYYY-MM-DD'))
        },
        days () {
            return [
                ...this.previousMonthDays,
                ...this.currentMonthDays,
                ...this.nextMonthDays
            ]
                .map((day) => {
                    day.events = this.events.filter(e => e.date === day.date)
                    day.isToday = day.date === this.today
                    day.isSelected = day.date === this.selectedDate.format('YYYY-MM-DD')

                    return day
                })
        },
        numberOfDaysInMonth () {
            return dayjs(this.selectedDate).daysInMonth()
        },
        currentMonthDays () {
            return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
                return {
                    date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
                        'YYYY-MM-DD'
                    ),
                    isCurrentMonth: true
                }
            })
        },

        previousMonthDays () {
            const firstDayOfTheMonthWeekday = this.getWeekday(
                this.currentMonthDays[0].date
            )
            const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
                1,
                'month'
            )

            // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
            const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
                ? firstDayOfTheMonthWeekday - 1
                : 6

            const previousMonthLastMondayDayOfMonth = dayjs(
                this.currentMonthDays[0].date
            )
                .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
                .date()

            return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
                (day, index) => {
                    return {
                        date: dayjs(
                            `${previousMonth.year()}-${previousMonth.month() +
                                1}-${previousMonthLastMondayDayOfMonth + index}`
                        ).format('YYYY-MM-DD'),
                        isCurrentMonth: false
                    }
                }
            )
        },

        nextMonthDays () {
            const lastDayOfTheMonthWeekday = this.getWeekday(
                `${this.year}-${this.month}-${this.currentMonthDays.length}`
            )

            const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, 'month')

            const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
                ? 7 - lastDayOfTheMonthWeekday
                : lastDayOfTheMonthWeekday

            return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
                return {
                    date: dayjs(
                        `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
                    ).format('YYYY-MM-DD'),
                    isCurrentMonth: false
                }
            })
        }
    },

    methods: {
        getWeekday (date) {
            return dayjs(date).weekday()
        },
        changeDates ({ from, to }) {
            this.selectedDate = dayjs(from)
            this.from = dayjs(from)
            this.to = dayjs(to)
            this.$emit('change', { from: this.from, to: this.to })
        },
        handleEventClick (event) {
            this.$emit('event-click', event)
        },
        selectDay (day) {
            this.selectedDate = dayjs(day.date)
        }
    }
})
</script>
