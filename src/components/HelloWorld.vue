<template>
  <section class="main-page">
    <div class="page_one"></div>
    <div class="row">
      <div class="page_two"></div>
      <div class="page_three"></div>
    </div>
    <div class="row">
      <div class="page_four"></div>
      <div class="page_five"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
