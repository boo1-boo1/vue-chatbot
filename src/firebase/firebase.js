import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCS7QkBhJy7jcuvrURhg1p-wuyLWKgl2VY',
  authDomain: 'jit-chatbot.firebaseapp.com',
  databaseURL: 'https://jit-chatbot.firebaseio.com',
  projectId: 'jit-chatbot',
  storageBucket: 'jit-chatbot.appspot.com',
  messagingSenderId: '385343467397',
};

firebase.initializeApp(config);

export default firebase;
