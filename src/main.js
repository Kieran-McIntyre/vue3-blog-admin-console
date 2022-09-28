import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "@/App.vue"
import router from "@/router"
import { createMockServer } from "@/mock-server"
import { createFontAwesomeLibrary } from "@/utils/createFontAwesomeLibrary"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "vue-skeletor/dist/vue-skeletor.css";
import "@/assets/tailwind.css"

// Start mock API.
createMockServer()

// Load FontAwesome icons.
createFontAwesomeLibrary()

// Create Vue app with plugins.
createApp(App)
    .use(createPinia())
    .use(router)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .mount("#app")
