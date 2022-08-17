<template>
  <div class="container">
    <app-alert text="Test" title="Внимание" type="warning" closable @close="alert = false" v-if="alert"></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} алерт</button>
    </div>
    <app-alert text="Test" title="Внимание" type="warning" closable @close="alert = false" v-if="alert"></app-alert>

  </div>
</template>

<script>

import AppAlert from "@/components/AppAlert";
import alertMixin from "@/mixin/alertMixin";
export default {
  name: 'App',
  components: {
    AppAlert
  },
  mixins: [alertMixin]
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
