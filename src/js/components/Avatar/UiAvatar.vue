<template>
    <Transition appear>
        <div class="overflow-hidden rounded-full ring-1 ring-white">
            <img :src="encodeURI(path)" alt="Avatar" class="object-cover w-full h-full transition-all duration-200 rounded-full shadow hover:scale-110">
        </div>
    </Transition>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            default: ''
        }
    }
}
</script>
