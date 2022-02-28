<template>
  <div id="app">
    <NavbarSection />
    <MainPage />
    <Modernitation />
    <News />
  </div>
</template>

<script>
import NavbarSection from "./components/NavbarSection.vue";
import MainPage from "./components/MainPage.vue";
import News from "./components/News.vue";
import Modernitation from "./components/Modernitation.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavbarSection,
    Modernitation,
    News,
  },
};
</script>

<style></style>
