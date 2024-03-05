import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import store from '@/store'

export function registerPlugins (app) {
    app
        .use(ElementPlus)
        .use(router)
        .use(store)
}
