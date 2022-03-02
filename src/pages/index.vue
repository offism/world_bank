<template>
  <div>
    <NavbarSection />
    <MainPage />
    <Modernitation />
    <News />
    <Questions />
    <Map />
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
import Map from "../components/Map.vue";

export default {
  name: "Home",
  components: {
    MainPage,
    NavbarSection,
    Modernitation,
    News,
    Questions,
    Map,
    Footer,
    UsageSlider,
  },
  data() {
    return {
      value: 1,
      first_name: "John",
      last_name: "Mosh",
    };
  },
  computed: {
    fullname: {
      get() {
        return this.first_name + " " + this.last_name;
      },
      set(value) {
        this.logger();
        this.first_name = value.split(" ")[0];
        this.last_name = value.split(" ")[1];
      },
    },
  },
  watch: {
    first_name(newValue, oldValue) {
      console.log("first_name old value", oldValue);
      console.log("first_name new value", newValue);
    },
    last_name(newValue, oldValue) {
      console.log("last_name old value", oldValue);
      console.log("last_name new value", newValue);
    },
    fullname(newValue, oldValue) {
      console.log("fullname old value", oldValue);
      console.log("fullname new value", newValue);
    },
  },
  methods: {
    logger() {
      console.log("something");
    },
  },
  //   mounted() {
  //     setTimeout(() => {
  //       this.$router.go();
  //     }, 1000);
  //   },
};
</script>

<style></style>
