import Home from '../views/Home.vue';
import Landing from '../views/Landing.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Player from '../views/Player.vue';
import Event from '../views/Event.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
    meta: {
      relatedToAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      relatedToAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      relatedToAuth: true,
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
    // beforeEnter: checkLoggedInRedirectLogin,
  },
  {
    path: '/player/:id',
    name: 'player',
    component: Player,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/event/:id',
    name: 'event',
    component: Event,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound,
  },
];

export default routes;
