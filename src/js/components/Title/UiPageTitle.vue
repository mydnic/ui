<template>
    <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
            <h1 class="title">
                <slot />
            </h1>
        </div>
        <div class="flex mt-4 md:mt-0 md:ml-4">
            <slot name="heading-right" />
        </div>
    </div>
</template>
