<template>
  <section class="modernitation__section">
    <div class="container">
      <div class="modernitation__header">
        <div class="row">
          <div class="col-4">
            <div class="modernitation_pacet__img">
              <div class="modernitation_pacet_box__img">
                <img src="./../../public/images/Pacets/pacet_img3.png" alt="" />
              </div>
            </div>
            <h4>Состав ГРП</h4>
            <p>
              Мы команда архивов,управления информацией профессионалов,
              отвечающих за записи и информацию
            </p>
          </div>
          <div class="col-4">
            <div class="modernitation_pacet__img">
              <div class="modernitation_pacet_box__img">
                <img src="./../../public/images/Pacets/pacet_img2.png" alt="" />
              </div>
            </div>
            <h4>Международном экспертном совете</h4>
            <p>У нас есть международная команда экспертов</p>
          </div>
          <div class="col-4">
            <div class="modernitation_pacet__img">
              <div class="modernitation_pacet_box__img">
                <img src="./../../public/images/Pacets/pacet_img.png" alt="" />
              </div>
            </div>
            <h4>Предложения и жалобы</h4>
            <p>
              Только зарегистрировано человек может оставить свои предложения и
              жалобы
            </p>
          </div>
        </div>
      </div>
      <div class="modernitation__body">
        <div class="row align-items-center justify-content-center">
          <div class="col-6">
            <h3>МОДЕРНИЗАЦИЯ НАЦИОНАЛЬНОЙ ИННОВАЦИОННОЙ СИСТЕМЫ УЗБЕКИСТАНА</h3>
            <p>
              28 октября 2020 года Совет директоров Всемирного банка одобрил
              проект «Модернизация национальной инновационной системы
              Узбекистана» с предоставлением финансовых средств в размере 50
              млн. долларов США. Исполнительным органом данного проекта является
              Министерство Инновационного развития (МИР) Республики Узбекистан.
            </p>
            <button class="btn">Подробнее</button>
          </div>
          <div class="modern_img__box col-6">
            <img src="./../../public/images/Pacets/modern_place.png" alt="" />
          </div>
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

<style scoped>
.modernitation__section {
  padding: 30px 0 20px;
}
.modernitation__header .row .col-4 {
  padding: 0 30px;
}
.modernitation__header {
  margin: 35px 0;
}
.modernitation__body .row .col-6 button {
  width: 20%;
  margin: 30px 0;
  display: inline-block;
  background-color: #529dd6;
  color: #fff;
}
.modernitation_pacet__img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background-color: #529dd6;
  border-radius: 50%;
  margin-bottom: 15px;
}
.modernitation_pacet__img img {
  background: aliceblue;
  height: 60%;
  width: 60%;
}
.modernitation_pacet_box__img {
  background-color: aliceblue;
  width: 100%;
  height: 102%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.modern_img__box::before {
  position: absolute;
  content: "";
  top: -33px;
  left: 26px;
  border: 3px solid #ebecfb;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.modern_img__box {
  position: relative;
  z-index: 1;
}
.modern_img__box img {
  width: 100%;
}
</style>
