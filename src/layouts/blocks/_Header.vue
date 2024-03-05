<template>
  <header class="header">
    <div class="header__logo">
      <router-link class="header__logo_link" to="/">Logo</router-link>
    </div>
    <div class="menu">
      <div class="menu__items">
        <router-link class="menu__item" v-for="menu of getMenuLinks()" :key="menu.title" :to="menu.uri">{{menu.title}}</router-link>
        <a v-if="isUserLoggedIn" @click="logout" class="menu__item">Выход</a>
      </div>
      <div class="menu__bar">
        <div class="menu__bar_link" @click="isMobileMenuOpened = !isMobileMenuOpened">
          <el-icon><Menu /></el-icon>
        </div>
      </div>
    </div>
  </header>
  <aside class="mobile-menu" :class="{'mobile-menu_show': isMobileMenuVisible()}">
    <div class="mobile-menu__items">
      <router-link class="mobile-menu__item" v-for="menu of getMenuLinks()" :key="menu.title" :to="menu.uri">{{menu.title}}</router-link>
      <a v-if="isUserLoggedIn" @click="logout" class="mobile-menu__item">Выход</a>
    </div>
  </aside>
</template>

<script>

export default {
  props: {
    isUserLoggedIn: Boolean
  },
  data () {
    return {
      isMobileMenuOpened: false,
    }
  },
  methods: {
    isMobileMenuVisible() {
      window.addEventListener('resize', this.handleResize);
      return this.isMobileMenuOpened
    },
    handleResize() {
      if (window.innerWidth > 575) {
        this.isMobileMenuOpened = false;
      }
    },
    getMenuLinks() {
      if (this.isUserLoggedIn) {
        return [
          {
            title: `Мои задачи (${this.getUser.login})`,
            uri: '/'
          }
        ]
      }
      return [
        {
          title: 'Авторизация',
          uri: '/authorization'
        }
      ]
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser.data
    }
  }
}
</script>

<style scoped>

</style>