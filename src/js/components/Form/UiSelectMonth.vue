<template>
    <UiSelect
        :value="value"
        v-bind="$attrs"
        :name="name"
        :options="monthRange"
        :required="required"
        @input="update"
    />
</template>

<script>
import dayjs from 'dayjs'
import UiSelect from './UiSelect.vue'

export default {
    components: { UiSelect },
    props: {
        name: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Date, Object],
            default: undefined
        },
        from: {
            type: [String, Date, Object],
            default: () => dayjs()
        },
        to: {
            type: [String, Date, Object],
            default: () => dayjs()
        }
    },

    computed: {
        monthRange () {
            let dateStart = dayjs(this.from)
            const dateEnd = dayjs(this.to)
            const timeValues = []

            // eslint-disable-next-line no-unmodified-loop-condition
            while (dateStart.isBefore(dateEnd)) {
                timeValues.push(dateStart.format('YYYY-MM'))
                dateStart = dateStart.add(1, 'month')
                // break
            }

            return timeValues.map((month) => {
                const m = dayjs(month)
                return {
                    value: m.format('YYYY-MM-DD'),
                    label: m.format('MMMM YYYY')
                }
            })
        }
    },
    methods: {
        update (value) {
            this.$emit('update:modelValue', value)
        }
    }
}
</script>
