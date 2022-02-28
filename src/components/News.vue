<template>
  <section class="news__section">
    <div class="container">
      <div class="row news__head">
        <h2 class="news__title">Новости</h2>
        <a href="#" class="news__btn btn">Все новости</a>
      </div>
      <div class="row news__pacets">
        <div class="col-3 news__pacet">
          <img
            src="./../../public/images/News/img1.png"
            alt=""
            class="news__pacet__img"
          />
          <div class="row">
            <small class="news__pacet__date">8 сентября 2021, 15:20</small>
            <small class="news__pacet__views"
              ><i class="lnr lnr-eye"></i
            ></small>
          </div>
          <h4 class="news__pacet__title">
            Флаг Узбекистана запустили в стратосферу
          </h4>
          <p class="news__pacet__text">
            Молодые ученые запустили аэростат с флагом Узбекистана в
            стратосферу. Видео запуска опубликовало Министерство инноваций в
            своем...
          </p>
          <small class="news__pacet__hashtag">#инновации</small>
        </div>
        <div class="col-3 news__pacet"></div>
        <div class="col-3 news__pacet"></div>
        <div class="col-3 news__pacet"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
.news__section {
  min-height: 40vh;
  padding: 100px 0;
}
.news__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.news__btn,
.news__title {
  width: 20%;
}
</style>
