<template>
    <div class="px-4 py-4 transition duration-150 ease-in-out sm:px-6 hover:bg-gray-50">
        <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-indigo-600 truncate">
                {{ title }}
            </p>
        </div>
        <div class="mt-2 sm:flex sm:justify-between">
            <div class="sm:flex">
                <p v-if="author" class="flex items-center text-sm text-gray-500">
                    <UserIconSolid class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    {{ author }}
                </p>
            </div>
            <div class="flex items-center mt-2 text-sm text-gray-500 sm:mt-0">
                <CalendarIconSolid class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />

                <p>
                    <time :datetime="date">{{ date }}</time>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { UserIcon, CalendarIcon } from '@heroicons/vue/24/solid'

export default {
    components: {
        UserIconSolid: UserIcon,
        CalendarIconSolid: CalendarIcon
    },
    props: {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            default: null
        },
        date: {
            type: String,
            default: null
        }
    }
}
</script>
