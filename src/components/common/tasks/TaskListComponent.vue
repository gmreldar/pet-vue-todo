<template>
  <div class="tasks">
    <div class="tasks__items">

      <TaskComponent :taskList="taskList" :showModal="showModal" :toggleStatusTask="toggleStatusTask"></TaskComponent>

      <h2 v-if="doneTaskList.length > 0">Выполненые задачи</h2>

      <TaskComponent :taskList="doneTaskList" :showModal="showModal" :toggleStatusTask="toggleStatusTask"></TaskComponent>

    </div>

    <div class="overlay" :class="{'modal_show': canShowModal}" @click="hideModal"></div>
    <div class="modal" :class="{'modal_show': canShowModal}">
      <div class="modal__wrapper">
        <div class="modal__form">
          <p class="modal__title">Редактирование задачи #{{id}}</p>
          <div class="modal__form-group">
            <label for="" class="model__form-label">Название</label>
            <input type="text" class="modal__form-input" v-model="title">
            <span class="error" :style="{'display': !titleValid ? 'block' : 'none'}">Обязательно для заполнения</span>
          </div>
          <div class="modal__form-group">
            <label for="" class="model__form-label">Описание</label>
            <input type="text" class="modal__form-input" v-model="description">
            <span class="error" :style="{'display': !descriptionValid ? 'block' : 'none'}">Обязательно для заполнения</span>
          </div>
        </div>
        <button class="button button_success" @click="updateTask">Обновить</button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/modal.scss'
import './_taskListComponent.scss'
import TaskComponent from "@/components/common/tasks/TaskComponent.vue";
export default {
  components: {TaskComponent},
  data() {
    return {
      id: '',
      title: '',
      description: '',
      canShowModal: false,
      titleValid: true,
      descriptionValid: true,
    }
  },
  mounted() {
    this.$store.dispatch('loadTasks')
  },
  methods: {
    toggleStatusTask(task) {
      task.done = !task.done
      this.$store.dispatch('toggleStatusTask', task.id)
    },
    showModal(task) {
      this.id = task.id
      this.title = task.title
      this.description = task.description
      this.canShowModal = true
    },
    hideModal() {
      this.id = ''
      this.title = ''
      this.description = ''
      this.canShowModal = false
    },
    updateTask() {
      if (!this.title) {
        this.titleValid = false
      }
      if (!this.description) {
        this.titleValid = false
      }
      if (this.title && this.description) {
        const task = {
          id: this.id,
          title: this.title,
          description: this.description,
        }
        this.$store.dispatch('updateTask', task)
        this.hideModal()
      }
    }
  },
  computed: {
    taskList() {
      return this.$store.getters.getTasks
    },
    doneTaskList() {
      return this.$store.getters.getDoneTasks
    }
  }
}
</script>

<style scoped>

</style>