import {createApp} from 'vue'
import {registerPlugins} from "@/plugins";
import MainLayout from '@/layouts/MainLayout.vue'

const app = createApp(MainLayout)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

registerPlugins(app)

app.mount('#app');
