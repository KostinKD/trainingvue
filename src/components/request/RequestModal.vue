<template>
  <form name="requestmodal" @submit.prevent="onSubmit">
    <div class="form-control" :class="{invalid: fError}">
      <label for="">ФИО</label>
      <input type="text" id="fio" v-model="fio" @blur="fBlur">
      <small v-if="fError">{{fError}}</small>
    </div>
    <br>
    <div class="form-control" :class="{invalid: pError}">
      <label for="">Телефон</label>
      <input type="text" id="phone" v-model="phone" @blur="pBlur">
      <small v-if="pError">{{pError}}</small>
      <br>
    </div>
    <div class="form-control" :class="{invalid: sError}">
      <label for="">Сумма</label>
      <input type="number" id="summa" v-model.number="summa" @blur="sBlur">
      <small v-if="sError">{{sError}}</small>
      <br>
    </div>
    <div class="form-control">
      <label for="">Статус</label>
      <select name="status" id="status" v-model="status">
        <option value="active">Активная</option>
        <option value="pending">В ожидании</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
      </select>
      <br>
    </div>
    <button class="btn" type="submit" :disabled="isSubmitting">Создать заявку</button>

  </form>
</template>

<script>
import {useRequestForm} from '@/use/request-form'
import {useStore} from "vuex";
export default {
  emits: ['created'],
  setup(_, {emit}){
    const store = useStore()

    const submit = async values => {
      await store.dispatch('request/create', values)
      emit('created')
    }

    return{
      ...useRequestForm(submit)
    }
  }
}
</script>

<style scoped>

</style>