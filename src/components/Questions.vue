<template>
  <section class="questions__section">
    <div class="container">
      <div class="row question_box">
        <div class="col-8 question_text__box">
          <h3 class="question_text_box__title">Часто задаваемые вопросы</h3>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Как настроить часто задаваемые вопросы в MUNIS ?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  8 октября 2020 года Совет директоров Всемирного банка одобрил
                  проект «Модернизация национальной инновационной системы
                  Узбекистана» с предоставлением финансовых средств в размере 50
                  млн. долларов США. Исполнительным органом данного проекта
                  является Министерство Инновационного развития (МИР) Республики
                  Узбекистан.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Что мы можем вам порекомендовать ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  8 октября 2020 года Совет директоров Всемирного банка одобрил
                  проект «Модернизация национальной инновационной системы
                  Узбекистана» с предоставлением финансовых средств в размере 50
                  млн. долларов США. Исполнительным органом данного проекта
                  является Министерство Инновационного развития (МИР) Республики
                  Узбекистан.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  С какими компаниями у нас отношения ?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  8 октября 2020 года Совет директоров Всемирного банка одобрил
                  проект «Модернизация национальной инновационной системы
                  Узбекистана» с предоставлением финансовых средств в размере 50
                  млн. долларов США. Исполнительным органом данного проекта
                  является Министерство Инновационного развития (МИР) Республики
                  Узбекистан.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Как настроить часто задаваемые вопросы в MUNIS ?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  8 октября 2020 года Совет директоров Всемирного банка одобрил
                  проект «Модернизация национальной инновационной системы
                  Узбекистана» с предоставлением финансовых средств в размере 50
                  млн. долларов США. Исполнительным органом данного проекта
                  является Министерство Инновационного развития (МИР) Республики
                  Узбекистан.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  С какими компаниями у нас отношения ?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  8 октября 2020 года Совет директоров Всемирного банка одобрил
                  проект «Модернизация национальной инновационной системы
                  Узбекистана» с предоставлением финансовых средств в размере 50
                  млн. долларов США. Исполнительным органом данного проекта
                  является Министерство Инновационного развития (МИР) Республики
                  Узбекистан.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 question_img__box">
          <img src="./../../public/images/Questions/frame.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Questions",
};
</script>

<style scoped>
.questions__section {
  min-height: 50vh;
  padding: 0;
  margin: 0 0 40px;
}
.question_texture__box {
  position: relative;
  margin: 40px 0;
}
.question_text_box__title {
  margin-bottom: 60px;
}
.question_box_cancel__btn {
  position: absolute;
  top: 0;
  right: 0;
}
.question_text_box__question {
  font-weight: 500;
}
</style>
