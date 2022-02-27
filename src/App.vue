<template>
  <div id="app">
    <NavbarSection />
    <MainPage />
  </div>
</template>

<script>
import NavbarSection from "./components/NavbarSection.vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavbarSection,
  },
};
</script>

<style></style>
