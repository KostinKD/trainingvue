<template>
  <form name="requestmodal">
    <div class="form-control">
      <label for="">ФИО</label>
      <input type="text">
      <br>
      <label for="">Телефон</label>
      <input type="text">
      <br>
      <label for="">Сумма</label>
      <input type="text">
      <br>
      <label for="">Статус</label>
      <select name="status">
        <option value="active">Активная</option>
        <option value="waiting">В ожидании</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>