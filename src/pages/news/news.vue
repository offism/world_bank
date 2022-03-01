<template>
  <div>
    <NavbarSection />
    <PaginationTitle />
    <News />
    <Footer />
  </div>
</template>

<script>
import NavbarSection from "./../../components/NavbarSection.vue";
import News from "./../../components/News.vue";
import Footer from "./../../components/Footer.vue";
import PaginationTitle from "./../../components/PaginationTitle.vue";

export default {
  name: "NewsPage",
  components: {
    NavbarSection,
    News,
    Footer,
    PaginationTitle,
  },
};
</script>

<style></style>
