import Vue from 'vue';
import Router from 'vue-router';

import store from './store';
import FirebaseAuth from './views/FirebaseAuth.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'firebaseauth',
      component: FirebaseAuth,
      meta: {
        guest: true,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

/* router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.auth.isLoggedIn) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  }
}); */

export default router;
