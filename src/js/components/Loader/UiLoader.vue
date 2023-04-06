<template>
    <div class="py-10 loader">
        <div class="mx-auto spinner">
            <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle
                    class="length"
                    fill="none"
                    stroke-width="8"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="28"
                />
            </svg>
            <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle
                    fill="none"
                    stroke-width="8"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="28"
                />
            </svg>
            <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle
                    fill="none"
                    stroke-width="8"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="28"
                />
            </svg>
            <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle
                    fill="none"
                    stroke-width="8"
                    stroke-linecap="round"
                    cx="33"
                    cy="33"
                    r="28"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: [Number, String],
            required: false,
            default: 50
        },
        fillColor: {
            type: String,
            required: false,
            default: 'currentColor'
        }
    }
}
</script>
