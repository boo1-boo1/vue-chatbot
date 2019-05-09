<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <router-link tag="nav" to="/">
        <a class="navbar-brand">Chatbot</a>
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link tag="li" to="/about">
            <a class="nav-link">About</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
