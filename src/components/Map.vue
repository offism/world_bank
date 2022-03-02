<template>
  <section class="map__section">
    <div class="container">
      <div class="map__wrapper">
        <h3>Контакты</h3>
        <div class="row">
          <div class="col-5">
            <label class="map__title h5" id="map__adress">Адрес:</label>
            <small class="map_adress__text" for="map__adress"
              >Адрес: 100174, г. Ташкент, Алмазарский р-н, ул. Университетская,
              дом 7</small
            >
            <label class="map__title fmt_top h5" id="map__phone"
              >Телефон:</label
            >
            <small class="map_adress__text" for="map__phone"
              >+998 97 170 67 84</small
            >
            <label class="map__title h5 fmt_top" id="map__email"
              >Эл. адрес:</label
            >
            <small class="map_adress__text" for="map__email"
              >munis@mininnovation.uz</small
            >
            <ul class="map_socials">
              <li>
                <a href="#" class="f"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#" class="i"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#" class="t"><i class="fab fa-telegram"></i></a>
              </li>
              <li>
                <a href="#" class="y"><i class="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-7">
            <img src="./../../public/images/map/map.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MapSection",
};
</script>

<style scoped></style>
