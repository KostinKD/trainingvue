<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начните писать..." v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активная</option>
        <option value="pending">В ожидании</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="resetFilter">Сброс фильтра</button>
  </div>
</template>

<script>
import {computed, ref, watch} from "vue";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(_,{emit}){
    const name = ref()
    const status = ref()


    watch([name,status],values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(()=> name.value || status.value)
    return{
      name,status, isActive,
      resetFilter: () => {name.value = null, status.value = null}
    }
  }
}
</script>

<style scoped>

</style>