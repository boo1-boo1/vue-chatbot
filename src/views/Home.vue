<template>
  <div class="home">
    <div class="container-fluid">
    <div class="chatbox row justify-content-center">
      <div class="col-4 align-self-end">
        <!-- <Chatbox /> -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import Chatbox from '../components/Chatbox.vue';

export default {
  name: 'home',
  created() {
    (function (d, m) {
      const kommunicateSettings = { appId: '2877c0429a4539ece78f18842a3e9f485', conversationTitle: 'JIT Chatbot' };
      const s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
      s.src = 'https://api.kommunicate.io/v2/kommunicate.app';
      const h = document.getElementsByTagName('head')[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    }(document, window.kommunicate || {}));
  },
  components: {
    // Chatbox,
  },
};
</script>

<style scoped>
.row {
  height: 80vh;
  padding: 2rem;
}
</style>
