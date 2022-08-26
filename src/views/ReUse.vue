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
import {reactive} from "vue";


export default {
  components: {
    AppAlert
  },
  setup(){
    const router = useRouter()
    const route = useRoute()

    // const alert = reactive({
    //   type: 'warning',
    //   title: 'Reactive Alert'
    // })
    // const {alert,toggle,close} = useAlert()
    // const [simpleAlert, toggle, close] = useAlert()

    const navigate = () => {
      router.push('/')
    }


    return{
      // alert,
      // toggle,
      // close,
      // ВМЕСТО ТОГО ЧТОБЫ ПИСАТЬ ВЫШЕ МОЖНО НАПИСАТЬ спред и на фукнцию ...useAlet()
      ...useAlert(true),
      navigate,

    }
  }
}
</script>

<style scoped>

</style>