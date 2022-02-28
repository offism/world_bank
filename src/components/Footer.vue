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

        <div class="col-2 footer_menu__box"></div>
        <div class="col-3 footer_adress__box"></div>
        <div class="col-3 footer_mail__box"></div>
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
</style>
