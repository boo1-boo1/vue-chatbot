<template>
  <div class="about">
    <h1>This is {{ displayName }}'s about page</h1>
    <h1>Your email ID is {{ email }}</h1>
  </div>
</template>

<script>
import firebase from '../firebase/firebase';

export default {
  name: 'about',
  data() {
    return {
      displayName: firebase.auth().currentUser.displayName,
      email: firebase.auth().currentUser.email,
    };
  },
};
</script>
