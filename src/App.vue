<template>
  <div id="app">
    <NavbarSection />
    <MainPage />
    <Modernitation />
    <News />
    <Questions />
    <UsageSlider />
  </div>
</template>

<script>
import NavbarSection from "./components/NavbarSection.vue";
import MainPage from "./components/MainPage.vue";
import News from "./components/News.vue";
import Modernitation from "./components/Modernitation.vue";
import UsageSlider from "./components/UsageSlider.vue";
import Questions from "./components/Questions.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavbarSection,
    Modernitation,
    News,
    Questions,
    UsageSlider,
  },
};
</script>

<style></style>
