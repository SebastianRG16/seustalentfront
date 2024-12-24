import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/page/Home.vue';
import HomeViewInformation from '../views/page/HomeViewInformation.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/viewinformation',
    name: 'HomeViewInformation',
    component: HomeViewInformation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
