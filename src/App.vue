<template>
  <div id="app">
    <NavbarSection />
    <MainPage />
    <Modernitation />
  </div>
</template>

<script>
import NavbarSection from "./components/NavbarSection.vue";
import MainPage from "./components/MainPage.vue";
import Modernitation from "./components/Modernitation.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavbarSection,
    Modernitation,
  },
};
</script>

<style></style>
