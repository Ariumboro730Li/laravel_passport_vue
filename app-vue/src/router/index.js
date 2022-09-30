//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '@/views/auth/AuthLogin.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ( /* webpackChunkName: "register" */ '@/views/auth/AuthRegister.vue')
    },
    {
        path: '/',
        name: 'post.index',
        component: () =>
            import ( /* webpackChunkName: "post.index" */ '@/views/post/PostIndex.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () =>
            import ( /* webpackChunkName: "post.create" */ '@/views/post/PostCreate.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () =>
            import ( /* webpackChunkName: "post.edit" */ '@/views/post/PostEdit.vue')
    },
    {
        path: '/table/',
        name: 'post.datatable',
        component: () =>
            import ( /* webpackChunkName: "post.edit" */ '@/views/post/PostDT.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})

export default router