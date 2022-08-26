<template>
  <app-alert v-if="alert" title="Работа с Compsiition API"  type ="primary" @click="close">  </app-alert>

  <div class="card">
    <h2>Переиспользование</h2>


    <button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать' }} сообщениен</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>

import {useRouter, useRoute} from 'vue-router'
import AppAlert from "@/AppAlert";
import {useAlert} from "@/use/alert";


export default {
  components: {
    AppAlert
  },
  setup(){
    const router = useRouter()
    const route = useRoute()


    const {alert,toggle,close} = useAlert()
    const navigate = () => {
      router.push('/')
    }


    return{
      alert,
      toggle,
      navigate,
      close
    }
  }
}
</script>

<style scoped>

</style>