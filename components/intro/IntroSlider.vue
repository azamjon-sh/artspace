<template>
  <div class="intro__slider">
    <VueSlickCarousel :settings="settings" :dots="true">
      <div class="intro__slide">
        <img class="intro__slider_img" src="~assets/img/intro/slide-1.png" alt="">
        <div class="intro__slide_content">
          <h2 class="intro__slide_title">
            Кухни под заказ
          </h2>
          <div class="intro__slide_subtitle">
            Разработаем и изготовим для Вас кухню, о которой мечтаете! Будь то большая кухня-столовая или эргономичная
            малышка для Вашей студии.
          </div>
          <a href="/" class="intro__slide_btn custom-btn brown">
            <span>Узнать подробнее</span>
            <Arrow/>
          </a>
        </div>
      </div>
      <div class="intro__slide">
        <img class="intro__slider_img" src="~assets/img/intro/slide-1.png" alt="">
        <div class="intro__slide_content">
          <h2 class="intro__slide_title">
            Кухни под заказ
          </h2>
          <div class="intro__slide_subtitle">
            Разработаем и изготовим для Вас кухню, о которой мечтаете! Будь то большая кухня-столовая или эргономичная
            малышка для Вашей студии.
          </div>
          <a href="/" class="intro__slide_btn custom-btn brown">
            <span>Узнать подробнее</span>
            <Arrow/>
          </a>
        </div>
      </div>
      <div class="intro__slide">
        <img class="intro__slider_img" src="~assets/img/intro/slide-1.png" alt="">
        <div class="intro__slide_content">
          <h2 class="intro__slide_title">
            Кухни под заказ
          </h2>
          <div class="intro__slide_subtitle">
            Разработаем и изготовим для Вас кухню, о которой мечтаете! Будь то большая кухня-столовая или эргономичная
            малышка для Вашей студии.
          </div>
          <a href="/" class="intro__slide_btn custom-btn brown">
            <span>Узнать подробнее</span>
            <Arrow/>
          </a>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel';

import Arrow from "assets/img/intro/Arrow";

export default {
  name: 'IntroSlider',
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
      },
    }
  },
  components: {Arrow, VueSlickCarousel},
}
</script>
