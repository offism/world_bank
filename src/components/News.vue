<template>
  <section class="news__section">
    <div class="container">
      <div class="news__head">
        <h2>Новости</h2>
        <a href="#" class="btn text-primary">Все новости</a>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="news__pacet">
            <img src="./../../public/images/News/img1.png" alt="Img" />
            <div class="row">
              <div class="news__row_with__height">
                <small class="news__pacet__date">8 сентября 2021, 15:20</small>
                <p class="news_pacet__mini__line">&nbsp;|</p>
                <span>10</span>
                <small class="news__pacet__views"
                  ><i class="lnr lnr-eye"></i
                ></small>
              </div>
            </div>
            <h4>Флаг Узбекистана запустили в стратосферу</h4>
            <p class="news__pacet__text">
              Молодые ученые запустили аэростат с флагом Узбекистана в
              стратосферу. Видео запуска опубликовало Министерство инноваций в
              своем...
            </p>
            <small class="news__pacet__hashtag">#инновации</small>
          </div>
        </div>
        <div class="col-3">
          <div class="news__pacet">
            <img src="./../../public/images/News/img2.png" alt="Img" />
            <div class="row mt-1">
              <div class="news__row_with__height">
                <small class="news__pacet__date">8 сентября 2021, 15:20</small>
                <p class="news_pacet__mini__line">&nbsp;|</p>
                <span>10</span>
                <small class="news__pacet__views"
                  ><i class="lnr lnr-eye"></i
                ></small>
              </div>
            </div>
            <h4>В администрации Чусткого района назначен замхокима...</h4>
            <p class="news__pacet__text">
              В Чустском районе Наманганской области заместителем хокима по
              инновационному развитию стал Каримходжаев Отабек Тухтасинович. Об
              этом сообщает...
            </p>
            <small class="news__pacet__hashtag">#инновации</small>
          </div>
        </div>
        <div class="col-3">
          <div class="news__pacet">
            <img src="./../../public/images/News/img.png" alt="Img" />
            <div class="row mt-1">
              <div class="news__row_with__height">
                <small class="news__pacet__date">8 сентября 2021, 15:20</small>
                <p class="news_pacet__mini__line">&nbsp;|</p>
                <span>10</span>
                <small class="news__pacet__views"
                  ><i class="lnr lnr-eye"></i
                ></small>
              </div>
            </div>
            <h4>В Узбекистане запустят масштабный медиапроект для...</h4>
            <p class="news__pacet__text">
              В Узбекистане запустят медиапроект FURSAT по созданию молодежных
              промышленных и предпринимательских зон (МППЗ) для привлечения
              молодых...
            </p>
            <small class="news__pacet__hashtag">#инновации</small>
          </div>
        </div>
        <div class="col-3">
          <div class="news__pacet">
            <div class="news__pacet__statuses">
              <div>
                <h5 class="news__pacet_status__text">
                  Bank of Baroda снизил ставки по жилищным кредитам до 6,5%
                </h5>
                <div class="row">
                  <p>8 сентября 2021</p>
                  <small>#состоянии проекта</small>
                </div>
                <hr />
              </div>
              <div>
                <h5 class="news__pacet_status__text">
                  Один из столичных районов преобразуют в инновационную...
                </h5>
                <div class="row">
                  <p>8 сентября 2021</p>
                  <small>#состоянии проекта</small>
                </div>
                <hr />
              </div>
              <div>
                <h5>Мининноваций реализует 25 инвестпроектов на сумму...</h5>
                <div class="row">
                  <p>8 сентября 2021</p>
                  <small>#состоянии проекта</small>
                </div>
                <hr />
              </div>
              <div>
                <h5>В Нукусе состоялась межотраслевая промышленная...</h5>
                <div class="row">
                  <p>8 сентября 2021</p>
                  <small>#состоянии проекта</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- DEVICES SECTION -->
      <div class="row mt-5">
        <div class="col-6 news__devices_box">
          <h4 class="news_devices_title my-4">
            Проект состоит из трех основных компонентов
          </h4>
          <p class="news_devices_text">
            Рамках Компонента 1 и Компонента 2 будут разработаны, в соответствии
            с международными стандартами, и реализованы 5 грантовых программ.
            Кроме того, в проекте есть Компонент 3 для комплексной технической
            помощи для всех секторов (правительство, университеты и бизнес)
            посредством консультирования, наращивания потенциала.
          </p>
          <div class="row news__devices_btn_box my-4">
            <a href="#" class="btn btn-outline-primary news_devices__btn mr-2"
              >Подробнее</a
            ><a href="#" class="btn btn-primary news_devices__btn"
              >Вход в программу</a
            >
          </div>
        </div>
        <div class="col-6 news__devices_box">
          <img src="./../../public/images/News/devices.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
.news__section {
  min-height: 40vh;
  padding: 100px 0 30px;
  margin: 0 0 60px;
}
.news__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.news__pacet {
  max-height: 20%;
}
.news__head a,
.news__head h2 {
  width: 20%;
}
.news__pacet__date {
  width: 55%;
  padding-top: 5px;
  padding-right: 0;
}
.news__pacet__views {
  width: 10%;
  padding-top: 4px;
  padding-left: 0;
  padding-right: 0;
}
.news__row_with__height,
.news__pacet__hashtag {
  color: gray;
}
.news__pacet img {
  width: 100%;
}
.news__pacet__text {
  font-size: 13px;
  margin-bottom: 0;
}
.news_pacet__mini__line {
  width: 5%;
}
.news__row_with__height {
  display: flex;
  height: 22px;
  margin-bottom: 10px;
}
.news__row_with__height span {
  width: 10%;
  padding-right: 0;
  padding-left: 0;
  padding-top: 1px;
}
.news__pacet__statuses {
  display: flex;
  flex-direction: column;
}
.news__pacet__statuses div h5 {
  font-size: 17px;
}
.news__pacet__statuses div .row {
  align-items: center;
}
.news__pacet__statuses div .row > * {
  width: 50%;
  color: gray;
}
.news__pacet__statuses div > hr {
  margin: 7px 0;
}
.news__pacet__statuses div .row p {
  margin-bottom: 0;
}
.news__pacet__statuses div small {
  font-size: 12px;
}
.news__devices_boxes {
  margin: 100px 0;
}
.news_devices_title {
  font-weight: 700;
}
.news_devices_text {
  font-size: 19px;
  margin-bottom: 20px;
}
.news__devices_btn_box {
  justify-content: start;
}
.news__devices_btn_box > * {
  width: 40%;
  margin-right: 10px;
}
</style>
