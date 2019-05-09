import firebase from '../../firebase/firebase';

export default {
  state: {
    uid: '',
    isLoggedIn: false,
  },
  mutations: {
    login(state, payload) {
      state.uid = payload.uid;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.uid = '';
      state.isLoggedIn = false;
    },
  },
};
