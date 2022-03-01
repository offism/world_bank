<template>
  <div>
    <NavbarSection />
    <PaginationTitle />
    <Footer />
  </div>
</template>

<script>
import NavbarSection from "./../../components/NavbarSection.vue";
import Footer from "./../../components/Footer.vue";
import PaginationTitle from "./../../components/PaginationTitle.vue";

export default {
  name: "Contacts",
  components: {
    NavbarSection,
    Footer,
    PaginationTitle,
  },
};
</script>

<style></style>
