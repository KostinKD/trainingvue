<template>
  <div class="container">
    <div class="card">
      <h1>Composition Vue</h1>
      <small>data,methods,computed,watch</small>
      <hr>
      <p>Название: <strong>{{name}}</strong></p>
      <p>Версия: <strong>{{version}} ({{doubleVersion}})</strong></p>

      <div class="form-control">
<!--        <input type="text" ref="textInput">-->
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref,reactive, toRefs, isRef, isReactive, computed, watch} from 'vue'

export default {
  name: 'App',
  // setup заменяет data,methods,computed,watch
  setup(){

    // константа ниже framework равнасильна этой записи
    const name = ref('VueJS')
    let version = ref(3)
    const textInput = ref(null)
    const firstName = ref(null)

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })



    const doubleVersion = computed(() => {
      return version.value * 2
    })

    watch([doubleVersion, name],(newValues, oldValues) => {
      console.log('new', newValues[0])
      console.log('new nm', newValues[1])
      console.log('old', oldValues[0])
      console.log('old nm', oldValues[1])
    })

    console.log(isRef())
    function changeInfo(){
      name.value = 'works'
      version.value = 4
      console.log(textInput.value.value)
      //REF
      // framework.value.name = 'It works'
      // framework.value.version = 4

      //REACTIVE
      // framework.name = 'It workds'
      // framework.version = 4
      // console.log(framework.value.name)
      // console.log(framework.value.version)
    }
    return {

        //ПОЛУЧАЕМ ЗНАЧЕНИЕ -> PROXY -> ВЫВОД и при измнении мы изменяем только прокси, но не значения в экспорте
        name: name,
        version: version,

      // ...toRefs(framework),
      framework: framework,
      change: changeInfo,
      doubleVersion,
      textInput,
      firstName
    }


  },
  components: {

  },

  //ОПЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ ИЛИ ТОЛЬКО SETUP или ТОЛЬКО METHODS
  // data(){ //ОПЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ
  //   return{
  //     name: 'VueJs',
  //     version: 3,
  //   }
  // },
  // methods: { //ОПЦИОНАЛЬНОЕ ПРОГРАММИРОВАНЕ
  //   changeInfo(){
  //       this.name = 'CompositionJS!'
  //       this.version = 4
  //   }
  // }
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
