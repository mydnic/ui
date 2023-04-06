<template>
    <div class="pb-5 space-y-3 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
        <h2 class="subtitle">
            <slot />
        </h2>
        <slot name="heading-right" />
    </div>
</template>
