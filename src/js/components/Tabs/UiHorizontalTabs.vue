<template>
    <div>
        <div class="mb-4 border-b border-gray-200">
            <nav aria-label="Tabs Menu" class="hidden -mb-px space-x-8 md:flex">
                <div
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="h-nav-item"
                    :class="{'active': index == currentTab}"
                    @click="setCurrentTab(index)"
                >
                    <slot v-if="tab.slotLabel" :name="tab.slotLabel" />
                    <span v-else class="truncate">
                        {{ tab.label }}
                    </span>
                </div>
            </nav>

            <nav aria-label="Tabs Menu" class="block md:hidden">
                <select name="tabs" class="input" @input="setCurrentTabFromSelect">
                    <option
                        v-for="(tab, index) in tabs"
                        :key="index"
                        :value="index"
                        :selected="index == currentTab"
                    >
                        {{ tab.label }}
                    </option>
                </select>
            </nav>
        </div>

        <div v-for="(tab, index) in tabs" :key="index">
            <Transition appear>
                <slot v-if="index === currentTab" :name="tab.slotName" />
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            required: true
        },
        defaultTab: {
            type: Number,
            default: 0
        }
    },

    data () {
        return {
            currentTab: this.defaultTab
        }
    },

    methods: {
        setCurrentTab (index) {
            this.currentTab = index
            this.$emit('changed', index)
        },

        setCurrentTabFromSelect (e) {
            this.setCurrentTab(parseInt(e.target.value))
        }
    }
}
</script>
