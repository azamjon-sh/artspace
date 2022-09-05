<script>
import Arrow from "assets/img/intro/Arrow";

export default {
  name: "Intro",
  components: {Arrow}
}
</script>

<template>
  <section class="intro">
    <div class="content">
      <div class="intro__inner row">
        <div class="col-12 col-xl-8">
          <IntroSlider/>
        </div>
        <div class="intro__right col row d-none d-lg-flex d-xl-block justify-content-around mt-4 m-xl-0">
          <div class="intro__card_1 d-flex align-items-center justify-content-center flex-column col-5 col-xl-12">
            <div class="logo">
              <img :src="require('assets/img/intro/roght-logo.png')" alt="">
            </div>
            <div class="subtitle">
              Японская сантехника для кухонь
            </div>
            <a href="/" class="intro__slide_btn custom-btn">
              <span>К продукции</span>
              <Arrow/>
            </a>
          </div>
          <div class="intro__card_2 d-flex justify-content-center flex-column col-5 col-xl-12">
            <h3 class="title">Больше возможностей при регистрации.</h3>
            <div class="text">
              Уважаемые посетители сайта компании ART.ELECTRO, просим вас зарегистрироваться для получения подробной
              информации о продукции. Только авторизованные пользователи могут видеть персональные бонусы.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

</style>
