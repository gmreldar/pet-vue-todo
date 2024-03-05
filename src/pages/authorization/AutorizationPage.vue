<template>
  <div class="authorization">
    <div class="main-form__header">
      <h1>Авторизация</h1>
    </div>
    <form class="main-form__form">
      <div class="main-form__form-group">
        <label class="main-form__label">Логин</label>
        <input class="main-form__input" type="text" v-model="login">
        <span class="error" :style="{'display': !loginValid ? 'block' : 'none'}">Обязательно для заполнения</span>
      </div>
      <div class="main-form__form-group">
        <label class="main-form__label">Пароль</label>
        <input class="main-form__input" type="password" v-model="password">
        <span class="error" :style="{'display': !passwordValid ? 'block' : 'none'}">Обязательно для заполнения</span>
      </div>
      <div class="info-block">
        <p>Если еще не зарегистрированы, перейдите по <router-link  to="/authorization/registration">ссылке</router-link> для регистрации</p>
      </div>
      <div class="main-form__action">
        <button :disabled="canDisableButton()" class="button button_success" @click="authorize">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import '@/assets/scss/form.scss'

export default {
  data () {
    return {
      login: '',
      password: '',
      loginValid: true,
      passwordValid: true,
    }
  },
  methods: {
    authorize() {
      if (!this.login) {
        this.loginValid = false;
      }
      if (!this.password) {
        this.passwordValid = false;
      }
      if (this.login && this.password) {
        const user =  {
          login: this.login,
          password: this.password
        };
        this.$store.dispatch('login', user)
      }
    },
    canDisableButton () {
      return this.login === '' || this.password === '';
    }
  }
}
</script>

<style scoped>

</style>