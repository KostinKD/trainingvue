<template>
<!--  <router-view></router-view>-->
<!--  <main-layout></main-layout>-->
<!--  <auth-layout></auth-layout>-->
  <component :is=" layout + '-layout'" v-if="layout"/>
</template>


<script>
import {useRoute} from 'vue-router'
import {computed} from "vue";


import MainLayout from "@/layout/MainLayout";
import AuthLayout from "@/layout/AuthLayout";

export default {

  components:{
    MainLayout,AuthLayout
  },
    setup(){
    const route = useRoute()

      return{
      layout: computed(()=>  route.meta.layout)
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
