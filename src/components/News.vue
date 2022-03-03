<template>
  <section class="news__section">
    <div class="container">
      <div class="news__head">
        <h2>Новости</h2>
        <!-- <router-link to="/news" class="btn text-primary"
          >Все новости</router-link
        > -->
        <router-link :to="{ name: 'news' }" class="btn text-primary"
          >Все новости</router-link
        >
      </div>
      <div class="row">
        <div class="col-3">
          <div class="news__pacet">
            <img src="./../../public/images/News/img1.png" alt="Img" />
            <div class="row">
              <div class="news__row_with__height">
                <small class="news__pacet__date">8 сентября 2021, 15:20</small>
                <p>&nbsp;|</p>
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
                <p>&nbsp;|</p>
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
                <p>&nbsp;|</p>
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
      <div class="news_devices__box">
        <div class="news_devices_box_row">
          <div class="row">
            <div class="col-xl-6">
              <h4>Проект состоит из трех основных компонентов</h4>
              <p>
                Рамках Компонента 1 и Компонента 2 будут разработаны, в
                соответствии с международными стандартами, и реализованы 5
                грантовых программ. Кроме того, в проекте есть Компонент 3 для
                комплексной технической помощи для всех секторов (правительство,
                университеты и бизнес) посредством консультирования, наращивания
                потенциала.
              </p>
              <div class="row">
                <button href="#" class="btn btn-outline-primary">
                  Подробнее
                </button>
                <button href="#" class="btn btn-primary">
                  Вход в программу
                </button>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="news_devices_box_row_col">
                <img src="./../../public/images/News/devices.png" alt="" />
              </div>
            </div>
          </div>
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

<style scoped></style>
