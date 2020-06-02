import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PopularTours from './views/PopularTours.vue';
import SearchTours from './views/SearchTours.vue';
import About from './views/About.vue';
import TourDitails from './views/TourDitails.vue';
import Registration from './views/Registration.vue';
import Login from './views/Login';
import Order from './views/Order';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/popular',
      name: 'populartours',
      component: PopularTours
    },
    {
      path: '/search',
      name: 'searchtours',
      component: SearchTours
    },
    {
      path: '/ditails/:tourId',
      name: 'ditails',
      component: TourDitails
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order/:tourId',
      name: 'order',
      component: Order
    },
  ]
})
