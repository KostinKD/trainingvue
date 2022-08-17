<template>
  <div class="modal-backdrop" @click="$emit('closeModal')">  </div>
    <div class="modal">
    <h2>Модальное окно</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, pariatur.</p>
    </div>
</template>

<script>
export default {
  emits: ['closeModal']
}
</script>

<style scoped>

</style>