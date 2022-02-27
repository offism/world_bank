<template>
  <section class="modernitation__section">
    <div class="container">
      <div class="modernitation__header">
        <div class="row py-4">
          <div class="modernitation__pacet col-4">
            <div class="modernitation_pacet__img">
              <img src="./../../public/images/Pacets/pacet_img3.png" alt="" />
            </div>
            <h4 class="modernitation_pacet__title">Состав ГРП</h4>
            <p class="modernitation_pacet__text">
              Мы команда архивов,управления информацией профессионалов,
              отвечающих за записи и информацию
            </p>
          </div>
          <div class="modernitation__pacet col-4">
            <div class="modernitation_pacet__img">
              <img src="./../../public/images/Pacets/pacet_img2.png" alt="" />
            </div>
            <h4 class="modernitation_pacet__title">
              Международном экспертном совете
            </h4>
            <p class="modernitation_pacet__text">
              У нас есть международная команда экспертов
            </p>
          </div>
          <div class="modernitation__pacet col-4">
            <div class="modernitation_pacet__img">
              <img src="./../../public/images/Pacets/pacet_img.png" alt="" />
            </div>
            <h4 class="modernitation_pacet__title">Предложения и жалобы</h4>
            <p class="modernitation_pacet__text">
              Только зарегистрировано человек может оставить свои предложения и
              жалобы
            </p>
          </div>
        </div>
      </div>
      <div class="modernitation__body">
        <div class="row">
          <div class="col-6">
            <h3 class="modernitation__title">
              МОДЕРНИЗАЦИЯ НАЦИОНАЛЬНОЙ ИННОВАЦИОННОЙ СИСТЕМЫ УЗБЕКИСТАНА
            </h3>
            <p class="modernitation__title">
              28 октября 2020 года Совет директоров Всемирного банка одобрил
              проект «Модернизация национальной инновационной системы
              Узбекистана» с предоставлением финансовых средств в размере 50
              млн. долларов США. Исполнительным органом данного проекта является
              Министерство Инновационного развития (МИР) Республики Узбекистан.
            </p>
            <button class="main-podrobnie__btn btn">Подробнее</button>
          </div>
          <div class="col-6"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modernitation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-podrobnie__btn {
  width: 20%;
  margin: 30px 0;
  display: inline-block;
  background-color: #529dd6;
  color: #fff;
}
.modernitation_pacet__img {
  background-color: #529dd6;
}
.modernitation_pacet__img img {
  background: aliceblue;
}
</style>
