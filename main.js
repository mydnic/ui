import { createApp } from 'vue'
import * as SolidIcons from '@heroicons/vue/24/solid'
import * as OutlineIcons from '@heroicons/vue/24/outline'
import mitt from 'mitt'
import App from './App.vue'
import filters from './src/js/filters'
import directives from './src/js/directives'
import registerToast from './src/js/components/Toast/plugin'
import registerDialog from './src/js/components/Dialog/plugin'

import './src/css/main.css'

const app = createApp(App)

// Filters
app.config.globalProperties.$filters = filters

// register all Icons globally
Object.entries(SolidIcons).forEach(([key, component]) => app.component(key + 'Solid', component))
Object.entries(OutlineIcons).forEach(([key, component]) => app.component(key + 'Outline', component))

// Directives
directives(app)

// Emitter
const emitter = mitt()
app.config.globalProperties.emitter = emitter

// Toast
registerToast(app)

// Dialog
registerDialog(app)

app.mount('#app')
