<template>
  <div class="header__middle">
    <div class="content">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <a href="/" class="header__logo">
            <img :src="require('assets/img/header/logo.svg')" alt="">
          </a>
        </div>
        <div class="col-auto">
          <div class="header__catalog-btn d-none d-lg-flex align-items-center justify-content-center">
            <img :src="require('assets/img/header/menu.svg')" alt="" class="me-2">
            <span>Весь каталог</span>
          </div>
        </div>
        <div class="col d-lg-block header__field">
          <div class="header__search d-flex justify-content-end align-items-center d-md-block">
            <input type="text" name="header-search" class="d-none d-md-block" placeholder="Поиск по сайту">
            <button class="header__search_btn d-flex d-md-none">
              <img :src="require('assets/img/header/call.svg')" alt="">
            </button>
            <button class="header__search_btn">
              <img :src="require('assets/img/header/search.svg')" alt="">
            </button>
          </div>
        </div>
        <div class="col col-md-auto row header__actions justify-content-evenly justify-content-xl-end">
          <div
            class="col-auto d-flex header__actions-item header__actions-menu align-items-center flex-column flex-xl-row d-xl-none">
            <Menu/>
            <div class="text">Каталог</div>
          </div>
          <div class="col-auto header__actions-item flex-column flex-xl-row d-flex align-items-center">
            <div class="header__actions_img">
              <img :src="require('assets/img/header/profile.svg')" alt="">
            </div>
            <div class="text">Войти</div>
          </div>
          <div class="col-auto header__actions-item flex-column flex-xl-row d-flex align-items-center">
            <div class="header__actions_img">
              <img :src="require('assets/img/header/chart.svg')" alt="">
              <span class="count">2</span>
            </div>
            <div class="text">Сравнение</div>

          </div>
          <div class="col-auto header__actions-item flex-column flex-xl-row d-flex align-items-center">
            <div class="header__actions_img">
              <img :src="require('assets/img/header/heart.svg')" alt="">
              <span class="count">4</span>
            </div>
            <div class="text">Избранное</div>
          </div>
          <div class="col-auto header__actions-item flex-column flex-xl-row d-flex align-items-center">
            <div class="header__actions_img">
              <img :src="require('assets/img/header/cart.svg')" alt="">
              <span class="count">6</span>
            </div>
            <div class="text">282 345 руб.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "assets/img/header/logo";
import Menu from "assets/img/header/menu";

export default {
  name: "HeaderMiddle",
  components: {Menu, Logo},
  data() {
    return {
      actionList: [
        {
          name: "Войти",
          img: '/assets/img/header/profile.svg',
        },
        {
          name: "Сравнение",
          img: 'assets/img/header/chart.svg',
        },
        {
          name: "Избранное",
          img: 'assets/img/header/heart.svg',
        },
        {
          name: "282 345 руб.",
          img: 'assets/img/header/cart.svg',
        },
      ],
    }
  }
}
</script>

<style lang="scss">

</style>
