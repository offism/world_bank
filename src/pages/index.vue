<template>
  <div>
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
import NavbarSection from "../components/NavbarSection.vue";
import MainPage from "../components/MainPage.vue";
import News from "../components/News.vue";
import Modernitation from "../components/Modernitation.vue";
import Questions from "../components/Questions.vue";
import UsageSlider from "../components/UsageSlider.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    MainPage,
    NavbarSection,
    Modernitation,
    News,
    Questions,
    Footer,
    UsageSlider,
  },
  //   mounted() {
  //     setTimeout(() => {
  //       this.$router.go();
  //     }, 1000);
  //   },
};
</script>

<style></style>
