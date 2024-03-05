import { createRouter, createWebHistory } from 'vue-router'
import AuthMiddleware from "@/router/middlewares/auth-middleware";
import HomePage from "@/pages/home/HomePage.vue";
import AuthorizationPage from "@/pages/authorization/AutorizationPage.vue"
import RegistrationPage from "@/pages/authorization/RegistrationPage.vue";
import CreateTaskPage from "@/pages/tasks/CreateTaskPage.vue";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomePage,
            beforeEnter: AuthMiddleware
        },
        {
            path: '/authorization',
            component: AuthorizationPage
        },
        {
            path: '/authorization/registration',
            component: RegistrationPage
        },
        {
            path: '/tasks/:id',
            component: '',
            beforeEnter: AuthMiddleware
        },
        {
            path: '/tasks/create',
            component: CreateTaskPage,
            beforeEnter: AuthMiddleware
        }
    ]
})

export default router
