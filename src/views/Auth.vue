<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войдите</h1>
    <div :class="['form-control',{invalid: eError}]">
      <label>Email</label>
      <input type="text" name="emailAuth" id="emailAuth" v-model="email" @blur="eBlur"/>
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control', {invalid: pError}]">
      <label>Пароль</label>
      <input type="text" name="passwordAuth" id="passwordAuth" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>
      <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts" @keyup.enter="onSubmit">Войти</button>
    <div class="text-danger" v-if="isTooManyAttempts">Вы часто заходите в систему. Попробуйте позже</div>
  </form>
</template>

<script>
import {useLoginForm} from "@/use/login-form";

export default {
  setup(){
    return {...useLoginForm()}
  }
}
</script>

<style scoped>

</style>