<template>

  <div class="navbar">
<!--    {{ counters.counter }}-->
    <p>{{ lowerCaseTitle }}</p>
    <button class="btn" @click="add">Add</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  // Обращение напрямую минуя store т.к у нас есть зависимость
  computed: {
    // counters(){
    //   return this.$store.getters.counter
    // },
    //
    ...mapGetters(['counter', 'lowerCaseTitle'])
  },
  methods: {
    ...mapMutations(['addFive']),
    add(){
      this.addFive({value: 1 })
      // vuex style
      //Так же мы можем в коммит передоавать объекты
      // return this.$store.commit('addFive', {
      //   value: 5,
      //   a: 1,
      //   b:3
      // })

    //  redux style равнозначны сверху
    //
    }
  }
}
</script>

<style scoped>

</style>