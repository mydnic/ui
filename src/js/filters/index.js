import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale('fr')

export default {
    format: (date, format) => {
        if (!date) {
            return
        }
        return dayjs(date).locale('fr').format(format)
    },

    ago: (date, showOnlyValue = false) => {
        return dayjs(date).locale('fr').fromNow(showOnlyValue)
    },

    age: (birthDate, till = null) => {
        const result = calculateFullAge(birthDate, till ? new Date(till) : new Date())
        if (result.years < 0 && till === null) {
            return 'naîtra dans environ ' + dayjs(birthDate).fromNow(true)
        }

        const age = []
        if (result.years > 0) { age.push(result.years + ' an' + (result.years > 1 ? 's ' : ' ')) }
        if (result.months > 0) { age.push(result.months + ' mois') }
        if (result.days > 0) { age.push(result.days + ' jour' + (result.days > 1 ? 's' : '')) }
        if (age.length > 1) { age.splice(age.length - 1, 0, ' et ') }

        return age.join('')
    },

    money: (value) => {
        if (typeof value !== 'number') {
            return value
        }
        const formatter = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2
        })
        return formatter.format(value / 100)
    },

    filesize: (num) => {
        // jacked from: https://github.com/sindresorhus/pretty-bytes
        if (typeof num !== 'number' || isNaN(num)) {
            throw new TypeError('Expected a number')
        }

        const neg = num < 0
        const units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        if (neg) {
            num = -num
        }

        if (num < 1) {
            return (neg ? '-' : '') + num + ' B'
        }

        const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
        num = (num / Math.pow(1000, exponent)).toFixed(2) * 1
        const unit = units[exponent]

        return (neg ? '-' : '') + num + ' ' + unit
    }
}

function calculateFullAge (date, targetDate) {
    const ageObj = {}
    const birthDate = new Date(date)
    const yearTarget = targetDate.getYear()
    const monthTarget = targetDate.getMonth()
    const dateTarget = targetDate.getDate()

    const yearDob = birthDate.getYear()
    const monthDob = birthDate.getMonth()
    const dateDob = birthDate.getDate()

    let monthAge, dateAge
    let yearAge = yearTarget - yearDob

    if (monthTarget >= monthDob) {
        monthAge = monthTarget - monthDob
    } else {
        yearAge--
        monthAge = 12 + monthTarget - monthDob
    }
    if (dateTarget >= dateDob) {
        dateAge = dateTarget - dateDob
    } else {
        monthAge--
        dateAge = 31 + dateTarget - dateDob
        if (monthAge < 0) {
            monthAge = 11
            yearAge--
        }
    }
    ageObj.years = yearAge
    ageObj.months = monthAge
    ageObj.days = dateAge

    return ageObj
}
