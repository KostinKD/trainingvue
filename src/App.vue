<template>
  <div class="container">
    <div class="card">
      <h2>Как работают плагины во VUE </h2>

      <button class="btn" @click="$alert('Its work!')">Alert</button>
    </div>
  </div>
</template>

<script>
import focuscustom from "@/directives/focuscustom";
import colorDirective from "@/directives/colorDirective";
export default {

}
</script>

<style scoped>

</style>