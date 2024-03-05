<template>
  <div class="wrapper">
    <HeaderBlock :is-user-logged-in="isUserLoggedIn"/>

    <main class="content">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import './_layout.scss'
import HeaderBlock from "@/layouts/blocks/_Header.vue";

export default {
  components: {HeaderBlock},
  beforeMount() {
    this.$store.dispatch('reLogin')
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
  },
}
</script>

<style>

</style>
