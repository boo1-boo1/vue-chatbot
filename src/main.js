import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import firebase from './firebase/firebase';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('login', {
          uid: user.uid,
        });
        this.$router.push('/home');
      } else {
        this.$store.commit('logout');
        this.$router.push('/login');
      }
    });
  },
  render: h => h(App),
}).$mount('#app');
