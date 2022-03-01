<template>
  <header class="header" id="head">
    <div class="navbar__section">
      <div class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img src="./../../public/images/MainPageImgs/frame1.png" alt=""
          /></a>
          <a class="navbar-brand" href="#"
            ><img src="./../../public/images/MainPageImgs/frame2.png" alt=""
          /></a>
          <a class="navbar-brand last" href="#"
            ><img src="./../../public/images/MainPageImgs/frame3.png" alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <label for="search__input">
                <i class="lnr lnr-magnifier"></i>
              </label>
              <input
                id="search__input"
                class="form-control me-2"
                type="search"
                placeholder="Поиск по сайту"
                aria-label="Search"
              />
            </form>
            <ul class="navbar-nav ml-4 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  ><i class="lnr lnr-smartphone"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="fas fa-solid fa-glasses"></i
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link i" href="#"
                  ><i class="lnr lnr-volume-medium"></i
                ></a>
              </li>
              <li class="nav-item l">
                <span class="m-0 p-0"> | </span>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Рус
                </a>
                <ul class="dropdown-menu mr-4" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item mr-4" href="#">Eng</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="vxod_btn nav-link hov btn btn-primary text-white mx-1 px-4"
                  >Вход в программу</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
