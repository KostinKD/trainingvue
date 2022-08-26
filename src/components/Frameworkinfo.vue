<template>
  <div class="card">
    <p>Название: <strong>{{name}}</strong></p>
    <p>Версия: <strong>{{version}} ({{doubleVersion}})</strong></p>


    <button class="btn warning" @click="changeBack">Изменить на 3 версию</button>

  </div>
</template>

<script>

import {computed, inject} from "vue";

export default {
  // props: ['name', 'version'],
  emits: ['change-ver'],

  setup(props, context){

    function change(){
      // logic
      context.emit('change-ver', 3)
    }


    let version = inject('version')

    return {
      name: inject('name'),
      version: version,
      changeBack: change,
      doubleVersion: computed(() => version.value  * 2)
    }
  }
}
  //OPTIONS API
//   computed: {
//   //   doubleVersion(){
//   //     return this.version * 2
//   //   }
//   // }
// }
</script>

<style scoped>

</style>