<template>
  <section class="footer">
    <div class="container">
      <div class="row footer__row">
        <div class="col-4 footer_attention__box">
          <img src="./../../public/images/att_img/ii.png" alt="" />
          <p class="footer_attention__text">
            Внимание! Если Вы нашли ошибку в тексте, выделите её и нажмите
            Ctrl+Enter для уведомления администрации
          </p>
          <p class="footer_attention__sociality">Мы в соцсетях:</p>
          <ul class="footer_social__links">
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

        <div class="col-2 footer_menu__box">
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
        <div class="col-3 footer_adress__box">
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
        <div class="col-3 footer_mail__box">
          <form class="form-control">
            <input type="text" placeholder="Эл. почта" class="form-control" />
            <button class="btn footer_mail__link">Подписаться</button>
            <p class="footer_main__text">
              Сайт обновлялся последний раз: 06:42, 13.07.2021 (GMT+5)
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  min-height: 20vh;
  margin: 60px 0 0;
  background-color: #05278d;
  color: #fff;
}
.footer_attention__box {
  padding: 0 30px;
}
.footer_attention__box img {
  width: 100%;
}
.footer_menu__links {
  display: flex;
  list-style-type: none;
  padding: 0;
  flex-direction: column;
  margin: 10px 0;
  font-size: 20px;
}
.footer_menu__link {
  text-decoration: none;
  color: rgb(231, 222, 222);
  font-size: 20px;
  margin-bottom: 20px;
}
.footer_menu__title {
  margin: 34px 0;
}
.footer_social__links {
  display: flex;
  list-style-type: none;
  padding: 0;
}
.footer_attention_social__link {
  color: #fff;
  transition: 0.3s ease all;
}
.footer_attention_social__item {
  margin-right: 14px;
  font-size: 27px;
}
.footer_attention_social__link.f:hover {
  color: #061541;
}
.footer_attention_social__link.i:hover {
  color: #c25265;
}
.footer_attention_social__link.y:hover {
  color: #c50a0a;
}
.footer_attention_social__link.t:hover {
  color: #1c8ae4;
}
.footer_menu__title {
  display: flex;
  margin-bottom: 7px !important;
}
.fmt_top {
  margin-top: 10px;
}
.footer_mail__box form {
  background: transparent;
  border: none;
  color: #fff;
  margin-top: 34px;
}
.footer_mail__box form input {
  background-color: transparent;
}
.footer_mail__link {
  margin: 10px 0 20px;
  color: #05278d;
  background-color: #fff;
  transition: 0.2s ease all;
}
::placeholder {
  color: #fff;
}
.footer_mail__link:hover {
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
}
</style>
