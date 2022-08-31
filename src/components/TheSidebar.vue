<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>

    <div class="sidebar-content">
      <p>Система сообщений</p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup(){
    const store = useStore()

    const sidebar = computed(()=> store.state.sidebar)

    return {
      sidebar,store,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style scoped>

</style>