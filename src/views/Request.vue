<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.summa)}}</p>
    <p><strong>Статус</strong>: <AppStatus :type="request.status"/> </p>
  </app-page>
  <h3 v-else class="text-center text-white">Заявки с ID = {{ id }} нет</h3>
</template>

<script>
import AppPage from "@/components/ui/AppPage";

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import AppStatus from "@/components/ui/AppStatus";
import AppLoader from "@/components/ui/AppLoader";
import {currency} from "@/utils/currency-formator";

export default {
  components: {
    AppPage,AppStatus,AppLoader
  },
  setup(){
    const route = useRoute()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})

    onMounted(async ()=>{
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      loading.value = false
    })


    return {
      loading,request,AppStatus,AppLoader,AppPage,id: route.params.id,currency
    }
  }
}
</script>

<style scoped>

</style>