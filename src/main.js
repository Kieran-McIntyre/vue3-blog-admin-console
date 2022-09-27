import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { createMockServer } from "@/mock-server"
import '@/assets/tailwind.css'

// Start mock API.
createMockServer()

// Create Vue app with plugins.
createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
