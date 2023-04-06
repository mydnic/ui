<template>
    <UiDropdown class="relative">
        <template #trigger>
            <UiTableActionIcon />
        </template>
        <template #content>
            <div class="dropdown-menu">
                <slot />
            </div>
        </template>
    </UiDropdown>
</template>

<script>
import UiDropdown from '../Dropdown/UiDropdown.vue'
import UiTableActionIcon from './UiTableActionIcon.vue'

export default {
    components: {
        UiDropdown,
        UiTableActionIcon
    }
}
</script>
