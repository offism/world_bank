<template>
  <div id="app">
    <NavbarSection />
    <MainPage />
    <Modernitation />
    <News />
    <Questions />
    <UsageSlider />
    <Footer />
  </div>
</template>

<script>
import NavbarSection from "./components/NavbarSection.vue";
import MainPage from "./components/MainPage.vue";
import News from "./components/News.vue";
import Modernitation from "./components/Modernitation.vue";
import Questions from "./components/Questions.vue";
import UsageSlider from "./components/UsageSlider.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavbarSection,
    Modernitation,
    News,
    Questions,
    Footer,
    UsageSlider,
  },
};
</script>

<style></style>
