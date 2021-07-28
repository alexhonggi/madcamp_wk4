import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue';
import CreateCard from '../views/CreateCard.vue';
import Designer from '../views/Designer.vue';
import Manager from '../views/Manager.vue';
import Developer from '../views/Developer.vue';
import Classification from '../views/Classification.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/card',
    name: 'CreateCard',
    component: CreateCard
  },
  {
    path: '/designer',
    name: 'Designer',
    component: Designer
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager
  },
  {
    path: '/developer',
    name: 'Developer',
    component: Developer
  },
  {
    path: '/classification',
    name: 'Classification',
    component: Classification
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
