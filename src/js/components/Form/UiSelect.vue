<template>
    <UiLayoutInput v-bind="layoutProps">
        <div class="relative">
            <div v-if="hasIconSlot" class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
                <slot name="icon" />
            </div>
            <div v-if="!isFocused && hasMultipleValues" class="absolute inset-y-0 flex max-w-[calc(100%-40px)] overflow-auto items-center px-1" @click="multipleOptionsClicked">
                <div v-for="label in multipleValuesLabel" :key="label" class="inline-flex items-center mt-1 mb-1 whitespace-nowrap ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ label }}
                </div>
            </div>
            <input
                id="combobox"
                ref="combobox"
                :required="required"
                :disabled="disabled"
                :value="inputValue"
                :class="{
                    'pl-10':hasIconSlot,
                    'text-transparent': !isFocused && hasMultipleValues
                }"
                type="text"
                class="pr-12 input"
                role="combobox"
                aria-controls="options"
                aria-expanded="false"
                :placeholder="!isFocused && hasMultipleValues ? '' : placeholder"
                v-bind="$attrs"
                @focus="open"
                @input="onInput"
            >
            <button
                v-if="!disabled"
                type="button"
                class="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none"
                @click="isFocused = !isFocused"
            >
                <ChevronUpDownIconSolid class="w-5 h-5 text-gray-400" />
            </button>
        </div>
        <ul
            v-show="isFocused"
            :id="name + 'options'"
            class="absolute z-10 w-full py-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            :class="{
                'bottom-full mb-1': top,
                'mt-1': !top,
            }"
            role="listbox"
        >
            <div v-if="multiple && modelValue && modelValue.length" class="flex flex-wrap items-center px-3 pb-1 mt-3 space-x-2">
                <div v-for="label in multipleValuesLabel" :key="label" class="inline-flex mb-2 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ label }}
                </div>
            </div>
            <div v-if="filteredOptions.length === 0">
                <li class="py-2 italic text-center text-gray-400">
                    Aucun résultat
                </li>
            </div>
            <template
                v-for="option in filteredOptions"
                :key="option.value"
            >
                <hr v-if="option === 'select-divider'" class="my-2">
                <li
                    v-else
                    :id="option.value"
                    class="relative py-2 pl-3 text-gray-900 cursor-pointer select-none group pr-9 hover:bg-primary-500 hover:text-white"
                    role="option"
                    tabindex="-1"
                    :disabled="option.disabled"
                    :class="{
                        'bg-gray-100 opacity-70 cursor-not-allowed': option.disabled
                    }"
                    @click="update(option)"
                >
                    <span
                        :class="{
                            'font-bold': isSelected(option)
                        }"
                        class="block truncate"
                    >{{ option.label }}</span>
                    <span
                        v-if="isSelected(option)"
                        class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-500 group-hover:text-white"
                    >
                        <CheckIconSolid class="w-5 h-5" />
                    </span>
                </li>
            </template>
        </ul>
    </UiLayoutInput>
</template>

<script>
import { defineComponent } from 'vue'
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/vue/24/solid'
import isInput from '../../mixins/form/isInput'
import search from '../../mixins/searchMixin'

export default defineComponent({
    components: {
        ChevronUpDownIconSolid: ChevronUpDownIcon,
        CheckIconSolid: CheckIcon
    },

    mixins: [isInput, search],
    inheritAttrs: false,

    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Choisir une option'
        },
        modelValue: {
            type: [String, Number, Array],
            default: undefined
        },
        options: {
            type: Array,
            required: true
        },
        top: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            isFocused: false,
            search: ''
        }
    },

    computed: {
        hasMultipleValues () {
            return this.multiple && this.modelValue && this.modelValue.length
        },
        multipleValuesLabel () {
            return this.hasMultipleValues
                ? this.cleanedOptions
                    .filter(o => this.modelValue.includes(o.value))
                    .map(o => o.label)
                : []
        },
        cleanedOptions () {
            return this.options
                .map((option) => {
                    if (typeof option === 'string') {
                        return {
                            value: option,
                            label: option
                        }
                    }
                    if (Array.isArray(option)) {
                        option.push('select-divider')
                    }
                    return option
                }).flat()
        },
        filteredOptions () {
            return this.cleanedOptions
                .filter((option) => {
                    return this.searchHasResult([
                        option.label
                    ], this.search)
                })
        },
        inputValue () {
            if (this.isFocused) {
                return this.search
            }
            if (this.multiple) {
                if (this.hasMultipleValues) {
                    return this.multipleValuesLabel.join(', ')
                }
                return ''
            }
            if (this.modelValue === undefined || this.modelValue === null) {
                return ''
            }

            const selected = this.cleanedOptions.find(o => o.value === this.modelValue)
            if (selected) {
                return selected.label
            }
            return ''
        }
    },

    mounted () {
        window.addEventListener('click', this.documentClick)
    },

    beforeUnmount () {
        window.removeEventListener('click', this.documentClick)
    },

    methods: {
        documentClick (e) {
            if (this.isFocused) {
                const el = this.$el
                const target = e.target

                if (el !== target && !el.contains(target)) {
                    this.close()
                }
            }
        },
        multipleOptionsClicked () {
            setTimeout(() => {
                this.isFocused = true
            }, 200)
        },
        close () {
            this.isFocused = false
            if (this.$refs.combobox) {
                this.$refs.combobox.value = this.inputValue
            }
            this.search = ''
        },
        open () {
            this.isFocused = true
            this.search = ''
        },
        onInput (e) {
            this.search = e.target.value
        },
        update (value) {
            if (this.modelValue && value.value === this.modelValue) {
                this.$emit('update:modelValue', null)
            } else if (value) {
                if (value.disabled) {
                    return
                }
                this.$emit('update:modelValue', this.multiple ? this.getNewMultipleValue(value) : value.value)
            } else {
                this.$emit('update:modelValue', null)
            }

            if (!this.multiple) {
                this.close()
            }
        },

        getNewMultipleValue (option) {
            if (this.modelValue && typeof this.modelValue === 'object') {
                const values = this.modelValue
                return values.find(o => o === option.value)
                    ? values.filter(o => o !== option.value)
                    : [...this.modelValue, option.value]
            } else {
                return [option.value]
            }
        },

        isSelected (option) {
            if (this.multiple && this.modelValue && typeof this.modelValue === 'object') {
                return !!this.modelValue.find(o => o === option.value)
            }
            return option.value === this.modelValue
        }
    }
})
</script>
