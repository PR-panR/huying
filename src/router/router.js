import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'

const routes = [
    {
        path: '/',
        name: 'user',
        redirect: '/user'
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/components/User.vue')
    },
    {
        path: '/groundback',
        name: "groundback",
        component: () => import('@/components/GroundBack.vue')
    },
    {
        path: '/search',
        name: "search",
        component: () => import('@/components/Search.vue')
    },
    {
        path: '/vote',
        name: "vote",
        component: () => import('@/pages/vote.vue')
    },
]

const router = new createRouter({
    routes,
    history: createWebHistory(process.env.RASE_URL)
})

export default router