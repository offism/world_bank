<template>
  <section class="main_banner">
    <div class="container">
      <div class="text__part">
        <p>30 сентября 2022</p>
        <h2>
          Узбекистан и Венгрия запускают конкурс на разработку научных проектов
          и стартапов
        </h2>
        <small
          >Мининноваций Узбекистана совместно с Министерством иностранных дел и
          торговли Венгрии объявили о запуске конкурса стартапов и научных
          проектов по всем совместным направлениям...</small
        >
        <button class="btn">Подробнее</button>
      </div>
    </div>
    <div class="home-demo">
      <div class="owl-carousel owl-theme">
        <div class="item">
          <p class="slide__date">30 сентября 2022</p>
          <h4 class="slide__title">
            Узбекистан и Венгрия запускают конкурс на разработку научных
            проектов и стартапов
          </h4>
          <small class="slide__texture"
            >Мининноваций Узбекистана совместно с Министерством иностранных дел
            и торговли Венгрии объявил запуске конкурса стартапов.</small
          >
        </div>
        <div class="item">
          <p class="slide__date">30 сентября 2022</p>
          <h4 class="slide__title">
            Узбекистан и Венгрия запускают конкурс на разработку научных
            проектов и стартапов
          </h4>
          <small class="slide__texture"
            >Мининноваций Узбекистана совместно с Министерством иностранных дел
            и торговли Венгрии объявил запуске конкурса стартапов.</small
          >
        </div>
        <div class="item">
          <p class="slide__date">30 сентября 2022</p>
          <h4 class="slide__title">
            Узбекистан и Венгрия запускают конкурс на разработку научных
            проектов и стартапов
          </h4>
          <small class="slide__texture"
            >Мининноваций Узбекистана совместно с Министерством иностранных дел
            и торговли Венгрии объявил запуске конкурса стартапов.</small
          >
        </div>
        <div class="item">
          <p class="slide__date">30 сентября 2022</p>
          <h4 class="slide__title">
            Узбекистан и Венгрия запускают конкурс на разработку научных
            проектов и стартапов
          </h4>
          <small class="slide__texture"
            >Мининноваций Узбекистана совместно с Министерством иностранных дел
            и торговли Венгрии объявил запуске конкурса стартапов.</small
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
.main_banner {
  min-height: 96vh;
  background: linear-gradient(
      134.3deg,
      rgba(0, 0, 0, 0.76) 26.87%,
      rgba(0, 0, 0, 0.24) 118.47%
    ),
    url("./../../public/images/Backgrounds/bg1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
}
.main_banner .container {
  padding: 60px 0 30px;
}
.item h4 {
  font-size: 20px;
}
.text__part {
  display: flex;
  flex-direction: column;
}
.text__part button {
  width: 20%;
  margin: 30px 0;
  display: inline-block;
  background-color: #529dd6;
  color: #fff;
}
.main__slider {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.slide__part {
  width: 32%;
  height: 30%;
}
.slide__part + .slide__part {
  margin-left: 45px;
}
.home-demo {
  position: relative;
  padding: 0 40px;
  width: 93%;
}
.home-demo h2 {
  color: #fff;
  text-align: center;
  padding: 5rem 0;
  margin: 0;
  font-style: italic;
  font-weight: 300;
}
</style>
