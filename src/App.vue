<template>
  <div id="app">
    <AppHeader />

    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },

  created() {
    this.$store.dispatch("products/fetch");
  },
};
</script>

<style scoped></style>
