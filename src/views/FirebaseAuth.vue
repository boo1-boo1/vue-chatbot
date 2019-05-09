<template>
  <div class="container-fluid">
    <div class="signup row justify-content-center">
      <div class="col-12 align-self-center">
        <div id="firebaseui-auth-container">
          <!-- FirebaseUI container -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseui from 'firebaseui';
import firebase from '../firebase/firebase';

export default {
  name: 'firebaseauth',
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod:
            firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
          requireDisplayName: true,
        },
      ],
      signInSuccessUrl: '/home',
    });
  },
};
</script>

<style>
.signup {
  height: 90vh;
}
</style>
