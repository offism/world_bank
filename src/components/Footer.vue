<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="row">
          <div class="col-sm-4 col-12">
            <img src="./../../public/images/att_img/ii.png" alt="" />
            <p>
              Внимание! Если Вы нашли ошибку в тексте, выделите её и нажмите
              Ctrl+Enter для уведомления администрации
            </p>
            <p>Мы в соцсетях:</p>
            <ul>
              <li class="footer_attention_social__item">
                <a href="#" class="footer_attention_social__link f"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li class="footer_attention_social__item">
                <a href="#" class="footer_attention_social__link i"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li class="footer_attention_social__item">
                <a href="#" class="footer_attention_social__link t"
                  ><i class="fab fa-telegram"></i
                ></a>
              </li>
              <li class="footer_attention_social__item">
                <a href="#" class="footer_attention_social__link y"
                  ><i class="fab fa-youtube"></i
                ></a>
              </li>
            </ul>
          </div>

          <div class="col-sm-2">
            <h5 class="footer_menu__title">Меню</h5>
            <ul class="footer_menu__links">
              <li class="footer_menu__item">
                <a href="#" class="footer_menu__link">O центре</a>
              </li>
              <li class="footer_menu__item">
                <a href="#" class="footer_menu__link">Разделы</a>
              </li>
              <li class="footer_menu__item">
                <a href="#" class="footer_menu__link"
                  >Международное сотрудничество</a
                >
              </li>
              <li class="footer_menu__item">
                <a href="#" class="footer_menu__link">Услуги</a>
              </li>
              <li class="footer_menu__item">
                <a href="#" class="footer_menu__link">Новости</a>
              </li>
              <li class="footer_menu__item">
                <a href="#" class="footer_menu__link">Контакты</a>
              </li>
            </ul>
          </div>
          <div class="col-sm-3 d-sm-n">
            <label class="footer_menu__title h5" id="footer__adress"
              >Адрес:</label
            >
            <small class="footer_adres__text" for="footer__adress"
              >Адрес: 100174, г. Ташкент, Алмазарский р-н, ул. Университетская,
              дом 7</small
            >
            <label class="footer_menu__title fmt_top h5" id="footer__adress"
              >Телефон:</label
            >
            <small class="footer_adres__text" for="footer__adress"
              >+998 97 170 67 84</small
            >
            <label class="footer_menu__title h5 fmt_top" id="footer__adress"
              >Эл. адрес:</label
            >
            <small class="footer_adres__text" for="footer__adress"
              >munis@mininnovation.uz</small
            >
          </div>
          <div class="col-sm-3 col-12">
            <form class="form-control">
              <input type="text" placeholder="Эл. почта" class="form-control" />
              <button class="btn">Подписаться</button>
              <p class="footer_main__text">
                Сайт обновлялся последний раз: 06:42, 13.07.2021 (GMT+5)
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
