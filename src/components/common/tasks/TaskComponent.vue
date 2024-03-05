<template>
  <div class="tasks__item" v-for="task of taskList" :key="task.id">
    <div class="tasks__action">
      <input type="checkbox" :checked="task.done" @change="handleToggle(task)">
    </div>
    <div class="tasks__wrapper" @click="handleClick(task)">
      <p :class="{'tasks_checked-text': task.done}">{{task.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskList: Array,
    showModal: Function,
    toggleStatusTask: Function,
  },
  methods: {
    handleClick(task) {
      this.showModal(task)
    },
    handleToggle(task) {
      this.toggleStatusTask(task)
    }
  }
}
</script>

<style scoped>

</style>