<template>
<!--  <nav>-->

<!--&lt;!&ndash;    <router-link to="/">Login</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--  </nav>-->
  <nav>
    <div class="container with-nav">
<!--      <login-view>-->
<!--      </login-view>-->
    </div>
  </nav>
  <router-view/>
</template>

<script>

import TheNavbar from "@/components/TheNavbar";
import LoginView from "@/views/LoginView";
export default {
  components: {
    TheNavbar, LoginView
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
