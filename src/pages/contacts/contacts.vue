<template>
  <div>
    <NavbarSection />
    <PaginationTitle />
    <MapSection />
    <Footer />
  </div>
</template>

<script>
import NavbarSection from "./../../components/NavbarSection.vue";
import Footer from "./../../components/Footer.vue";
import PaginationTitle from "./../../components/PaginationTitle.vue";
import MapSection from "./../../components/Map.vue";

export default {
  name: "Contacts",
  components: {
    NavbarSection,
    Footer,
    MapSection,
    PaginationTitle,
  },
};
</script>

<style></style>
