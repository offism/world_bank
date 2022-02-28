<template>
  <section class="news__section">
    <div class="container">
      <div class="row news__head">
        <h2 class="news__title">Новости</h2>
        <a href="#" class="news__btn btn text-primary">Все новости</a>
      </div>
      <div class="row news__pacets">
        <div class="col-3 news__pacet">
          <img
            src="./../../public/images/News/img1.png"
            alt=""
            class="news__pacet__img"
          />
          <div class="news__row_with__height row mt-1">
            <small class="news__pacet__date">8 сентября 2021, 15:20</small>
            <p class="news_pacet__mini__line">|</p>
            <span class="news__pacet_view__num">10</span>
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
        <div class="col-3 news__pacet">
          <img
            src="./../../public/images/News/img1.png"
            alt=""
            class="news__pacet__img"
          />
          <div class="news__row_with__height row mt-1">
            <small class="news__pacet__date">8 сентября 2021, 15:20</small>
            <p class="news_pacet__mini__line">|</p>
            <span class="news__pacet_view__num">10</span>
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
        <div class="col-3 news__pacet">
          <img
            src="./../../public/images/News/img1.png"
            alt=""
            class="news__pacet__img"
          />
          <div class="news__row_with__height row mt-1">
            <small class="news__pacet__date">8 сентября 2021, 15:20</small>
            <p class="news_pacet__mini__line">|</p>
            <span class="news__pacet_view__num">10</span>
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
.news__pacet {
  max-height: 20%;
}
.news__btn,
.news__title {
  width: 20%;
}
.news__pacet__date {
  width: 55%;
  padding-top: 5px;
  padding-right: 0;
}
.news__pacet__views {
  width: 10%;
  padding-top: 4px;
  padding-left: 0;
  padding-right: 0;
}
.news__row_with__height,
.news__pacet__hashtag {
  color: gray;
}
.news__pacet__img {
  width: 100%;
}
.news__pacet__text {
  font-size: 15px;
}
.news_pacet__mini__line {
  width: 5%;
}
.news__row_with__height {
  height: 22px;
  margin-bottom: 10px;
}
.news__pacet_view__num {
  width: 10%;
  padding-right: 0;
  padding-left: 0;
  padding-top: 1px;
}
</style>
