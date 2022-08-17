<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink.hover="myColor">Директивы</h2>
      <div class="form-control">
        <label for="inputtext">Активный по умолчанию</label>
        <input type="text" name="text" id="inputtext" v-foces>
      </div>
      <button class="btn" @click="myColor = 'darkblue'">Синий</button>
      <button class="btn" @click="type = type === 'color' ? 'background' : 'color'">Переключить тип</button>
      {{type}}
    </div>
  </div>
</template>

<script>
import focuscustom from "@/directives/focuscustom";
import colorDirective from "@/directives/colorDirective";
export default {
  data(){
    return{
      myColor: 'darkred',
      type: 'color',
      show: true
    }
  },
// mounted() {
//   setTimeout(()=>{
//     this.show = false
//   },2000)
// },
  //ЛОКАЛЬНАЯ РЕГИСТРАЦИЯ КОМПОНЕНТОВ
  directives:{
    foces: focuscustom,
    color: colorDirective
  }
}
</script>

<style scoped>

</style>