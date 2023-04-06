<template>
    <UiSelect
        :model-value="modelValue"
        v-bind="$attrs"
        :name="name"
        :options="yearRange"
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
        modelValue: {
            type: [String, Date, Object],
            default: undefined
        },
        from: {
            type: [String, Number],
            default: () => dayjs()
        },
        to: {
            type: [String, Number],
            default: () => dayjs()
        }
    },

    computed: {
        yearRange () {
            let dateStart = dayjs().year(this.from)
            const dateEnd = dayjs().year(this.to)
            const timeValues = []

            while (dateStart.isBefore(dateEnd)) {
                timeValues.push(dateStart.format('YYYY'))
                dateStart = dateStart.add(1, 'year')
                // break
            }

            return timeValues.map((year) => {
                const m = dayjs(year)
                return {
                    value: m.format('YYYY'),
                    label: m.format('YYYY')
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
