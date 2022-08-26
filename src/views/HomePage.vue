<template>
  <app-alert v-if="alert" title="Работа с Compsiition API"  type ="danger" @click="close">  </app-alert>

  <div class="card">
    <h1>Composition Vue</h1>
    <small>data,methods,computed,watch</small>
    <hr>
    <div class="form-control">
      <!--        <input type="text" ref="textInput">-->
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>
    <button class="btn primary" @click="toggle">Показать алерт</button>
  </div>
  <Frameworkinfo @change-version="changeVersion" @change-ver="changever" class="test-from-app">
    <template #footer><p>Footer</p></template>
  </Frameworkinfo>
</template>

<script>

import Frameworkinfo from "@/components/Frameworkinfo";
import AppAlert from "@/AppAlert";
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref
} from "vue";
import {useAlert} from "@/use/alert";

export default {
  components: {
    Frameworkinfo, AppAlert
  },
  setup(){
     const {alert,close,toggle} = useAlert()
    // константа ниже framework равнасильна этой записи
    const name = ref('VueJS')
    let version = ref(3)
    const textInput = ref(null)
    const firstName = ref(null)

    const framework = reactive({
      name: 'VueJs',
      version: 3
    })


    // const doubleVersion = computed(() => {
    //   return version.value * 2
    // })

    console.log('created')
    onBeforeMount(()=>{
      console.log('beforeMount')
    })
    onMounted(()=>{
      console.log('mounted')
    })
    onBeforeUpdate(()=>{
      console.log('beforeupdate')
    })
    onUpdated(()=>{
      console.log('update')
    })
    onBeforeUnmount(()=>{
      console.log('beforeunmount')
    })
    onUnmounted(()=>{
      console.log('unmount')
    })

    function changeInfo(){
      name.value = 'works'
      version.value = 42
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

    function changeVersion(num){
      version.value = num
    }

    function changever(num){
      version.value = num
    }

    provide('name', name)
    provide('version', version)


    return {

      //ПОЛУЧАЕМ ЗНАЧЕНИЕ -> PROXY -> ВЫВОД и при измнении мы изменяем только прокси, но не значения в экспорте
      // name,
      // version,

      // ...toRefs(framework),
      framework: framework,
      change: changeInfo,
      changeVersion: changeVersion,
      // doubleVersion,
      // textInput,
      firstName,
      changever: changever,
      alert,
      toggle,
      close
    }


  }
}
</script>

<style scoped>

</style>