<template>
  <app-page title="Помощь" back>
    <question-item v-for="q in questions"
        :key="q.title"
        :question="q"></question-item>
  </app-page>
</template>

<script>

import AppPage from "@/components/ui/AppPage";
import QuestionItem from "@/components/question/QuestionItem";



export default {
  components: { AppPage, QuestionItem},
  setup(){
    const questions = [
        {title: 'Что есть в системе?', text: 'Взаимодествие с заявками'},
        {title: 'Авторизация', text: 'Реализовано через Firebase'}
    ]

    return {questions, AppPage,QuestionItem}
  }
}
</script>

<style scoped>

</style>