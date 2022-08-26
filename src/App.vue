<template>
  <header class="navbar">
    <h2>Router</h2>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li>
        <router-link to="/reuse">Переиспользование</router-link>
      </li>
      <li>
        <router-link to="/vuex">Vuex</router-link>
      </li>
    </ul>
  </header>
  <div class="container with-nav">
    <router-view>

    </router-view>
  </div>
</template>

<script>
import {ref,reactive, toRefs, isRef, isReactive, computed, watch, provide,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'

export default {
  name: 'App',
  // setup заменяет data,methods,computed,watch

  //ОПЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ ИЛИ ТОЛЬКО SETUP или ТОЛЬКО METHODS
  // data(){ //ОПЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ
  //   return{
  //     name: 'VueJs',
  //     version: 3,
  //   }
  // },
  // methods: { //ОПЦИОНАЛЬНОЕ ПРОГРАММИРОВАНЕ
  //   changeInfo(){
  //       this.name = 'CompositionJS!'
  //       this.version = 4
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
