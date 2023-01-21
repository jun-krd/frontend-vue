import Login from "@/pages/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import Register from "@/pages/Register.vue";
import store from "@/script/store";
import Home from "@/pages/Home.vue";

import Admin from "@/pages/Admin.vue";
import User from "@/pages/User.vue";

const requireAuth = () => (from, to, next) => {
    const token = store.state.account.id;
    if (token === 1) {
        return next();
    }
    next('/login')
};

const requireAdmin = () => (from, to, next) => {
    const role = store.state.account.role;
    if (role.toString() === 'ROLE_ADMIN') {
        return next();
    }
    alert("관리자 권한이 없습니다.")
};

const requireUser = () => (from, to, next) => {
    const role = store.state.account.role;

    if (role.toString() === 'ROLE_USER') {
        return next();
    }
    alert("유저 권한이 없습니다.")
};

const routes = [
    {
        path:'/',
        component:Home,
        beforeEnter : requireAuth()

    },
    {
        path:'/login',
        component:Login
        //beforeEnter:requireAuth()
    },
    {
        path:'/register',
        component: Register
    },
    {
        path : '/admin',
        component: Admin,
        beforeEnter : requireAdmin()
    },
    {
        path: '/user',
        component: User,
        beforeEnter: requireUser()

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});




export default router;