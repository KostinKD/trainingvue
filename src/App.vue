<template>
  <div class="container">
    <div class="card">
      <h1>Composition Vue</h1>
      <small>data,methods,computed,watch</small>
      <hr>
      <p>Название: <strong>{{name}}</strong></p>
      <p>Версия: <strong>{{version}}</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref,reactive, toRefs, isRef, isReactive} from 'vue'

export default {
  name: 'App',
  setup(){

    // константа ниже framework равнасильна этой записи
    const name = ref('VueJS')
    let version = ref(3)


    console.log(isRef(name))

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })

    console.log(isReactive(framework))
    console.log(framework)
    function changeInfo(){
      name.value = 'works'
      version.value = 4

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
      change: changeInfo
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
