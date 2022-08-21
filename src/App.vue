<template>
  <TheNavbar></TheNavbar>
  <div class="container with-nav">
    <div class="card">
      <h1>VUEX</h1>
      <h2>Counter: {{ $store.getters.counterGetter }} ({{$store.getters.doubleCounter}})</h2>
      <h2>Counter: {{ $store.state.isAuth }}</h2>
      <button class="btn" @click="add">Do it!</button>
      <button class="btn" @click="incrementAsync">Do it! + 10</button>
    </div>
  </div>
</template>

<script>


import TheNavbar from "@/components/TheNavbar";
export default {
  name: 'App',
  components: {
    TheNavbar
  },
  // data(){
  //   return {
  //     counter: 0
  //   }
  // },
//  OLD METHONDs and local state
  methods: {
    add(){
      //Использование обычной функции в компоненте
      // this.$store.state.counter++
      //Использование mutations через стор
      this.$store.commit('increment')
      this.$store.state.isAuth = false
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync', {
        value: 200,
        delay: 2000
      })
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
  margin-top: 60px;
}
</style>
