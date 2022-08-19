<template>
<!--  <nav>-->

<!--&lt;!&ndash;    <router-link to="/">Login</router-link> |&ndash;&gt;-->
<!--&lt;!&ndash;    <router-link to="/about">About</router-link>&ndash;&gt;-->
<!--  </nav>-->
<!--  <nav>-->
    <div class="container with-nav">
      <router-view/>
<!--      <login-view>-->
<!--      </login-view>-->
    </div>
<!--  </nav>-->

  <the-navbar :visible="isAuth"></the-navbar>
</template>

<script>

import TheNavbar from "@/components/TheNavbar";
import LoginView from "@/views/LoginView";
export default {
  components: {
    TheNavbar
  },
  data(){
    return {
      isAuth: true
    }
  },
  methods: {
    login(){
      this.isAuth = true
      // this.$router.push('/dashboard')
      if(this.$route.query.page){
        this.$route.push(this.$route.query.page)
      } else {
        this.$route.push('/dashboard')
      }
    },
    logout(){
      this.isAuth = false
      this.$router.push({
        path: '/login',
        query: {
          page: this.$route.path
        }
      })
    },
  },
  provide(){
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: '1', theme: 'Куккуук'},
        {id: '2', theme: 'Куккуук'},
        {id: '3', theme: 'Ttew'},
        {id: '4', theme: 'dsad'},
        {id: '5', theme: 'lorem3'}
      ]
    }
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
