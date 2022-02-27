<template>
  <section class="main-header">
    <div class="text__part">
      <p class="main__date">30 сентября 2022</p>
      <h2 class="main__title">
        Узбекистан и Венгрия запускают конкурс на разработку научных проектов и
        стартапов
      </h2>
      <small class="main__texture"
        >Мининноваций Узбекистана совместно с Министерством иностранных дел и
        торговли Венгрии объявили о запуске конкурса стартапов и научных
        проектов по всем совместным направлениям...</small
      >
      <button class="main-podrobnie__btn btn">Подробнее</button>
    </div>
    <div class="home-demo">
      <hr class="home-demo__horizontal" />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-header {
  min-height: 100vh;
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
  padding: 200px 130px;
}
.text__part {
  display: flex;
  flex-direction: column;
}
.main-podrobnie__btn {
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
  margin-top: 40px;
  width: 95%;
}
.home-demo h2 {
  color: #fff;
  text-align: center;
  padding: 5rem 0;
  margin: 0;
  font-style: italic;
  font-weight: 300;
}
.item {
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.home-demo__horizontal {
  position: absolute;
  top: -16px;
  height: 1px;
  width: 100%;
}
</style>
