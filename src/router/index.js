import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/AboutPage",
            component: About
        }
    ]
});

export default router;