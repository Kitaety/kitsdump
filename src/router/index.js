import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Loading from '../views/Loading.vue';
import About from '../views/About.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/home',
    name: 'Главная',
    component: Home,
  },
  {
    path: '/about',
    name: 'Об авторе',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
