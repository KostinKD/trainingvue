<template>
  <div class="alert" :class="type" @click="$emit('close')">
    <p class="alert-title">{{title}}</p>
    <p>lorem5</p>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['title', 'type ']

}
</script>

<style scoped>

</style>