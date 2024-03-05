<template>
  <div class="task">
    <h1>Новая задача</h1>
    <form class="main-form__form">
      <div class="main-form__form-group">
        <label class="main-form__label">Название задачи</label>
        <input class="main-form__input" type="text" v-model="title">
        <span class="error" :style="{'display': !titleValid ? 'block' : 'none'}">Обязательно для заполнения</span>
      </div>
      <div class="main-form__form-group">
        <label class="main-form__label">Описание задачи</label>
        <input class="main-form__input" type="text" v-model="description">
        <span class="error" :style="{'display': !descriptionValid ? 'block' : 'none'}">Обязательно для заполнения</span>
      </div>
      <div class="main-form__action">
        <button :disabled="canDisableButton()" class="button button_success" @click.prevent="create">Создать</button>
      </div>
    </form>
  </div>
</template>

<script>
import '@/assets/scss/form.scss'
export default {
  data() {
    return {
      title: '',
      description: '',
      titleValid: true,
      descriptionValid: true,
    }
  },
  methods: {
    canDisableButton () {
      return this.title === '' || this.description === '';
    },
    create() {
      if (!this.title) {
        this.titleValid = false;
      }
      if (!this.description) {
        this.descriptionValid = false;
      }
      if (this.title && this.description) {
        const task = {
          title: this.title,
          description: this.description,
        }
        this.$store.dispatch('createTask', task)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>

</style>