<template>
  <div class="container">
    <div class="card">
      <h2>{{ $translatewords('app.title') }}</h2>
      <button class="btn" @click="$alert('Its work!')">Alert</button>
      <button class="btn" @click="changeLang">{{ $translatewords('app.changeBtn') }}</button>
    </div>
  </div>
</template>

<script>
import focuscustom from "@/directives/focuscustom";
import colorDirective from "@/directives/colorDirective";
export default {
  inject: ['changetranslatewords'],
  methods: {
    changeLang(){
      this.changetranslatewords('eng')
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>

</style>