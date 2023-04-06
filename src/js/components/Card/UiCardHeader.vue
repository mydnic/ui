<template>
    <div class="flex items-center justify-between px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
            <slot />
        </h3>
        <slot name="header-right" />
    </div>
</template>
