<template>
  <section class="paginationTitle__section">
    <div class="container-fluid">
      <div class="paginationTitle__wrapper">
        <div class="container">
          <h4>{{ $route.name }}</h4>
          <router-link to="/">Главная</router-link> /
          <span>{{ $route.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PaginationTitle",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped></style>
