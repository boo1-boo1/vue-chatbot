<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import firebase from './firebase/firebase';

export default {
  components: {
    Navbar,
  },
};
</script>


<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import '../node_modules/firebaseui/dist/firebaseui.css';
</style>
