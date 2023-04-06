import dayjs from 'dayjs'

export default {
    methods: {
        generateDateRange (from, to, interval = 1, period = 'month', format = 'YYYY-MM-DD') {
            let dateStart = dayjs(from)
            const dateEnd = dayjs(to)
            const timeValues = []

            // eslint-disable-next-line no-unmodified-loop-condition
            while (dateStart.isBefore(dateEnd)) {
                timeValues.push(dateStart.format(format))
                dateStart = dateStart.add(interval, period)
                // break
            }

            return timeValues
        }
    }
}
