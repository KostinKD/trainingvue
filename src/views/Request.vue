<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Заявка" v-else-if="request">
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.summa)}}</p>
    <p><strong>Статус</strong>: <AppStatus :type="request.status"/> </p>


    <select name="status" id="status" v-model="status">
      <option value="active">Активная</option>
      <option value="pending">В ожидании</option>
      <option value="done">Завершен</option>
      <option value="cancelled">Отменен</option>
    </select>


    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn primary" @click="update" v-if="hasChanges">Обновить</button>
  </app-page>
  <h3 v-else class="text-center text-white">Заявки с ID = {{ id }} нет</h3>
</template>

<script>
import AppPage from "@/components/ui/AppPage";

import {useRoute} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";
import AppStatus from "@/components/ui/AppStatus";
import AppLoader from "@/components/ui/AppLoader";
import {currency} from "@/utils/currency-formator";
import router from "@/router";

export default {
  components: {
    AppPage,AppStatus,AppLoader
  },
  setup(){
    const route = useRoute()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref()


    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }
    const update = async () => {
      const data = {...request.value, status: status.value, id: route.params.id}
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }
    onMounted(async ()=>{
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(()=>
      request.value.status !== status.value
    )


    return {
      loading,request,AppStatus,AppLoader,AppPage,id: route.params.id,currency,remove, update, status, hasChanges
    }
  }
}
</script>

<style scoped>

</style>