<template>
  <div class="home">
    <div class="home__header">
      <div class="home__title">
        <h1>Мои задачи</h1>
      </div>
      <div class="home__button">
        <router-link class="button button_success" to="/tasks/create">Добавить задачу</router-link>
      </div>
    </div>

    <TaskListComponent></TaskListComponent>
  </div>
</template>

<script>
import './_HomePage.scss'
import TaskListComponent from "@/components/common/tasks/TaskListComponent.vue";
export default {
  components: {TaskListComponent}
}
</script>

<style scoped>

</style>