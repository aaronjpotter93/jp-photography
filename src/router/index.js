import { createRouter, createWebHistory } from 'vue-router'

import Landing from "@/views/Landing.vue";
import Headshots from "@/views/Headshots.vue";
import Pricing from "@/views/Pricing.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {path: '/', name: 'Landing', component: Landing},
    {path: '/headshots', name: 'Headshots', component: Headshots},
    {path: '/pricing', name: 'Pricing', component: Pricing},
    {path: '/about', name: 'About', component: About},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/:catchAll(.*)', name: 'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router