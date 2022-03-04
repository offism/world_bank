<template>
  <section class="map__section">
    <div class="container">
      <div class="map__wrapper">
        <h3>Контакты</h3>
        <div class="row">
          <div class="col-md-5 col-sm-12">
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
          <div class="col-md-7 col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1072610887645!2d69.34439151504266!3d41.37175427926567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef39a116bbcbf%3A0xa31397ff937bc465!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgtGB0LrQsNGPINGD0LvQuNGG0LAsINCi0L7RiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1646208334087!5m2!1sru!2s"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
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
