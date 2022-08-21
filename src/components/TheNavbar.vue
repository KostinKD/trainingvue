<template>

  <div class="navbar">
    {{ counters.counter }}
    {{ $store.state.isAuth}}
    <button class="btn" @click="add">Add</button>
  </div>
</template>

<script>
export default {
  // Обращение напрямую минуя store т.к у нас есть зависимость
  computed: {
    counters(){
      return this.$store.state
    }
  },
  methods: {
    add(){
      // vuex style
      //Так же мы можем в коммит передоавать объекты
      // return this.$store.commit('addFive', {
      //   value: 5,
      //   a: 1,
      //   b:3
      // })

    //  redux style равнозначны сверху
      this.$store.commit({
        type: 'addFive',
        value: 5
      })
    }
  }
}
</script>

<style scoped>

</style>