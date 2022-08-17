<template>
  <div class="container">
    <div class="card">
      <h2>{{ $translatewords('app.title') }}</h2>
      <button class="btn" @click="$alert('Its work!')">Alert</button>
      <button class="btn" @click="changeLang">{{ $translatewords('app.changeBtn') }}</button>
      <button class="btn" @click="showModal = true">Показать модальное окно</button>
    </div>
  </div>
  <teleport to="#modal">
    <app-modal v-if="showModal" @closeModal="showModal = false"></app-modal>
  </teleport>
</template>

<script>
import focuscustom from "@/directives/focuscustom";
import colorDirective from "@/directives/colorDirective";
import appModal from "@/components/AppModal";
export default {
  components: {appModal},
  data(){
    return {
      showModal: false
    }
  },
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