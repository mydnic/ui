<template>
    <button type="button" role="button" class="print:hidden btn btn-icon" @click="printNow">
        <PrinterIconOutline class="w-5 h-5" />
    </button>
</template>

<script>
import { PrinterIcon } from '@heroicons/vue/24/outline'

export default {
    components: {
        PrinterIconOutline: PrinterIcon
    },

    props: {
        id: {
            type: String,
            required: true
        },
        cssFile: {
            type: String,
            default: 'https://cdn.tailwindcss.com'
        }
    },

    methods: {
        printNow (value) {
            this.$nextTick(() => {
                const prtContent = document.getElementById(this.id)
                if (prtContent) {
                    const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0')
                    WinPrint.document.write('<link rel="stylesheet" href="' + this.cssFile + '">')
                    WinPrint.document.write(prtContent.innerHTML)
                    WinPrint.document.close()
                    WinPrint.focus()
                    setTimeout(() => {
                        WinPrint.print()
                    }, 500)
                } else {
                    alert('Aucun contenu à imprimer')
                }
            })
        }
    }
}
</script>
